class Channel extends EnhancedEventEmitter{

​	constructor({producerSocket, consumerSocket, pid}){

​		this._producerSocket = producerSocket as Duplex;

​		this._consumerSocket = consumerSocket as Duplex;	

​	}

}

//从worker读取通道消息

this._consumerSocket.on('data',(buffer)=>{

​	...

})