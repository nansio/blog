RoomClient._joinRoom(): new Device.createSendTransport()

Device ===> mediasoup-client/src/Device.ts

createSendTransport(options){

​	_createTransport(options);

}

_createTransport(options){

​	new Transport(options)===>Transport.ts

}

创建producer和consumer在

Transport.ts中的produce()和consume()

_handleProducer(), _handleConsumer()