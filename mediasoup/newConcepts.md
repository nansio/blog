#### SDP(Session Description Protocol)会话描述协议

#### Simulcast : 多流发送

#### SVC : 分层接收

#### ICE/DTLS/RTP/RTCP, 既可以运行在TCP，也可在UDP

#### payload 有效载荷，负载量

- 支持拥塞控制
- 带宽评估（REMB）
- 支持STCP协议（非音视频数据，文件、文本）
- 多流使用同一个ICE+DTLS传输通道，减少端口使用

WebRtcTransport：负责接受、发送媒体流

PlainTransport

DirectTransport



### Redux

action描述发生了什么，reducers根据action更新state的用法

store就是把他们联系到一起的对象，即，给予reducers根据action更新state的接口

store的作用：

- 维持应用的state
- getState()获取state
- dispatch(action)更新state
- subscribe(listener)注册监听器

Redux应用只有一个store