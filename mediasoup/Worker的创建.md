**demo/server/server.js**

runMediasoupWorks(){

​	mediasoup.createWorker()--->

}

---

**demo/server/node_modules/mediasoup/lib/index.js**

async function createWorker({}){

​	const worker = new Worker({})--->

}

Worker.js

Class Worker{

​	construct({}){...}

}

---

Worker.createRouter({mediaCodecs, appData={}}={}){

​	new Router({}){...}--->

}

**Router.js**

Class Router{

​	constructor({}){...}

​	async createWebRtcTransport({}){}

​	async createPlainTransport({}){}

​	async createPlainTtpTransport({}){}

​	async createPipeTransport({}){}

​	async createDirectTransport({}){}

​	async pipeToRouter({}){}

​	asyn createAudioLevelObserver({}){}

​	canConsume({}){} 

}

