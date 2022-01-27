#### nginx处理请求逻辑图

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190511170603322.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5Njc3ODY3,size_16,color_FFFFFF,t_70)

#### WebSocket 机制

WebSocket是HTML5下一种新的协议。它实现了浏览器与服务器全双工通信，能更好的节省服务器资源和带宽并达到实时通讯的目的。它与HTTP一样通过已建立的TCP连接来传输数据，但是它和HTTP最大不同是：
1） WebSocket是一种双向通信协议。在建立连接后，WebSocket服务器端和客户端都能主动向对方发送或接收数据，就像Socket一样；
2）WebSocket需要像TCP一样，先建立连接，连接成功后才能相互通信。

传统HTTP客户端与服务器请求响应模式如下图所示：

![img](https://images2018.cnblogs.com/blog/907596/201808/907596-20180821162614243-1749361344.jpg)

WebSocket模式客户端与服务器请求响应模式如下图：

![img](https://images2018.cnblogs.com/blog/907596/201808/907596-20180821162630256-29020146.jpg)

WebSocket应用程序可以在客户端和服务器之间保持长时间运行的连接，从而有助于开发实时应用程序。用于将连接从HTTP升级到WebSocket的HTTP升级机制使用Upgrade和Connection头。反向代理服务器在支持WebSocket时面临一些挑战。一个是WebSocket是一个逐跳协议，因此当代理服务器拦截客户端的升级请求时，需要向后端服务器发送自己的升级请求，包括相应的头文件。此外，由于WebSocket连接长期存在，与HTTP使用的典型短期连接相反，反向代理需要允许这些连接保持打开状态，而不是关闭它们，因为它们似乎处于空闲状态。

- WebSocket与Http相同点
    都是一样基于TCP的，都是可靠性传输协议。
    都是应用层协议。

- WebSocket与Http不同点
    WebSocket是双向通信协议，模拟Socket协议，可以双向发送或接受信息。HTTP是单向的。
    WebSocket是需要浏览器和服务器握手进行建立连接的。而http是浏览器发起向服务器的连接，服务器预先并不知道这个连接。

- WebSocket与Http联系
  WebSocket在建立握手时，数据是通过HTTP传输的。但是建立之后，在真正传输时候是不需要HTTP协议的。

在WebSocket中，只需要服务器和浏览器通过HTTP协议进行一个握手的动作，然后单独建立一条TCP的通信通道进行数据的传送。
WebSocket连接的过程是：
1）客户端发起http请求，经过3次握手后，建立起TCP连接；http请求里存放WebSocket支持的版本号等信息，如：Upgrade、Connection、WebSocket-Version等；
2）服务器收到客户端的握手请求后，同样采用HTTP协议回馈数据；
3）客户端收到连接成功的消息后，开始借助于TCP传输信道进行全双工通信。

#### nginx.conf 配置文件

```nginx
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
sendfile        on;

keepalive_timeout  65;

server {
    listen       80;
    server_name  localhost;

    location /web/ {
        proxy_pass https://192.168.4.55:3000/;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}

server {
    listen       443;
    server_name  localhost;

  ssl on;
  ssl_certificate   /etc/nginx/keys/ca.crt;
  ssl_certificate_key  /etc/nginx/keys/ca.key;
  ssl_session_timeout 5m;
  ssl_ciphers ECDHE-RSA-AES128-GCM-		          SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_prefer_server_ciphers on;

    location / {
        proxy_pass https://192.168.4.55:3000/;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        }

        location /wss/ {
            proxy_pass https://192.168.4.55:4443/;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

转发webscoket的时候，下面这两行是必不可少的

​	    proxy_set_header Upgrade $http_upgrade;
​            proxy_set_header Connection "upgrade";

