# Dependencies

> protoo-client, mediasoup-client, Logger, urlFactory, cookieManger
>
> reux/requestActions, redux/stateActions

# Constants

> VIDEO_CONSTRAINS,
>
> PC_PROPRIETARY_CONSTRAINTS
>
> WEBCAM_SIMULCAST_ENCODINGS,	
>
> WEBCAM_KSVC_ENCODINGS, 	//VP9视频编码
>
> SCREEN_SHARING_SIMULCAST_ENCODINGS,	//屏幕共享联播编码
>
> SCREEN_SHARING_SVC_ENCODING,	//VP9屏幕共享编码
>
> EXTERNAL_VIDEO_SRC
>
> logger
>
> store

# Class RoomClient

> 1. init：初始化store（Redux唯一全局变量），在index.jsx中被调用
> 2. constructor()：初始化属性(room)，播放本地视频
> 3. close()：关闭protoo peer, mediasoup transport，设置房间状态
> 4. join()：
> 5. enableMic()，disableMic()
> 6. muteMic(), unmuteMic()
> 7. enableWebcam(), disableWebcam()
> 8. changeWebcam(), changeWebcamResolution()
> 9. enableShare(), disableShare()
> 10. enableAudioOnly(), disableAudioOnly()
> 11. muteAudio(), unmuteAudio()
> 12. restartIce()
> 13. setMaxSendingSpatialLayer(spatialLayer)
> 14. setConsumerPreferredLayers(consumerId,spatialLayer,temporalLayer)
> 15. setConsumerPriority(consumerId,priority)
> 16. requestConsumerKeyFrame(consumerId)
> 17. enableChatDataProducer()
> 18. enableBotDataProducer()
> 19. sendChatMessage(text)
> 20. sendBotMessage(text)
> 21. changeDisplayName(displayName)
> 22. getSendTransportRemoteStats()
> 23. getRecvTransportRemoteStats()
> 24. getAudioRemoteStats(), getVideoRemoteStats()
> 25. getConsumerRemoteStats(), getChatDataProducerRemoteStats()
> 26. getBotDataProducerStats()
> 27. getDataConsumerRemoteStats(dataConsumerId)
> 28. getSendTransportLocalStats()
> 29. getRecvTransportLocalStats()
> 30. getAudioLocalStats(), getVideoLocalStats()
> 31. getConsumerLocalStats()
> 32. applyNetworkThrottle({uplink, downlink, rtt, secret})
> 33. resetNetworkThrottle({silent=false,secret})
> 34. ***_joinRoon()***
> 35. ***_updateWebcams()***
> 36. ***_getWebcamType(device)***
> 37. ***_pauseConsumer(consumer)***
> 38. ***resumeConsumer(consumer)***
> 39. ***getExternalVideoStream()***

