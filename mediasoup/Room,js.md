### Room的创建

static async create({mediasoupWorker, roomId}){...}

Room{

​	roomId, protooRoom, mediasoupRouter, audioLevelObserver, bot

}

protooRoom = new protoo.Room()

mediaCodecs<=config.mediasoup.routerOptions //*config.js*

mediasoupRouter = await **mediasoupWorker.createRouter**({mediaCodecs});

audioLevelObserver = mediasoupRouter.createAudioLevelObserver({})

bot = Bot.create({mediasoupRouter})=>*server/lib/Bot.js*

// 通过创建DirectTransport来连接bot---responsible for message?

//在创建Room的时候就已经通过worker创建了router,详见worker的创建



### Peer的创建

*server/lib/Room.js/**handleProtooConnection({peerId,consume,protooWebSocketTransport})***

peerIdExsiting?--->1, close this peerId

--->0, protooRoom.createPeer(peerId,protooWebSocketTransport)

创建peer.data：存储mediasoup相关对象，

创建Transports even before the peer join the room

peer.on('request',(request, accept, reject))=>{

​	logger.debug('sth');

​	this._handleProtooRequest(peer, request, accept, reject);//信令处理

})

peer.on('close',()=>{})：若待关闭peer曾在房间内，peer close后通知房间内所有其他peer-->关闭所有peer.data.transports.values--->protooRoom.peer.length==0? --->1, this(room).close();

### Peer加入房间/Router

Room.js

handleProtooConnection({}){

​	peer.on('request',(request,accept,reject)=>{

​		this._handleProtooRequest(peer, request, accept, reject)

​	})

}

_handleProtooRequest(peer, request, accept, reject){

​	switch(request.method){

​		case 'join' : {

​			检查用户是否已在房间内

​			将request.data from client存到protoo peer object中去

​			告知新入peer其他同房伙伴，为现存producer创建consumer

​			为该请求返回已加入房间用户列表

​			更改新入房间peer.joined

​			为新入peer创建consumers of other producers, dataconsumers

​			notify the new Peer to all other peers

​		}

​	}

}

---

methods handled are as following:

join

getRouterRtpCapabilities

createWebRtcTransport, connectWebRtcTransport

restartIce

produce, closeProducer, pauseProducer, resumProducer

pauseConsumer, resumeConsumer

setConsumerPreferredLayers, setConsumerPriority

requestConsumerKeyFrame,

produceData, changeDisplayName

getStatus[Transport, Producer, Consumer, DataProducer, DataConsumer]

applyNetworkThrottle, resetNetworkThrottle