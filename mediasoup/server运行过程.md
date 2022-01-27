Server运行过程（包括Room和Peer创建）

通过run函数，顺序执行 

- interactiveServer()：设置监听函数，开启端口监听和REPL
- interactiveClient()
- runMediasoupWorkers()：创建n个worker,定时log worker资源使用情况
- createExpressApp()：创建基于Express的的API Server来管理Broadcaster requests
- runHttpsServer()：创建nodejs HTTPS server监听config文件中IP和端口，重用express作为请求监听器
- runProtooWebSocketServer()：创建protooWebSocketServer，设置监听connectionRequest，根据url中roomId和peerId分别创建room和peer，通过getOrCreateRoom创建room,使用room.handleProtooConnection创建peer
- setInterval(()=>{//定时log room status})

---

**runProtooWebsocketServer()**

1. 创建socketServer实例
2. 监听Client connection request

收到连接请求后，根据url中的roomId，peerId通过getOrCreateRoom({roomId})创建房间 =>*server.js*

轮询方式（Round Robin）调用worker创建房间 =>*server.js/getMediasoupWorker()*

room = Room.create({mediasoupWorker, roomId})=>*Room.js*

