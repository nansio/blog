worker>nRouter

Worker>1Channel

Chanel<===>C++

Transport

> WebRtcTransport：浏览器加密数据使用的传输
>
> PlainRtpTransport：自定义Rtp数据，如FFmpeg
>
> PipeTransport：Router间通信的基类

Mediasoup/lib/js 作用

生成JSON字符串，传递给C++

作为应用层(JS)调用C++层的接口层

