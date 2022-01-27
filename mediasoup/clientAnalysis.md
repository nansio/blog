### RoomClient.js

客户端房间的定义--->RoomClient.js<---mediasoup-client

以类的形式定义了，房间相关属性，websocket事件，Mic，Webcam，share，chat等操作

使用**protoo-clien**t建立websocket连接，该socket不仅含有open,close事件，还包括request，response，notification事件

server与之对应的使用的是protoo-server模块

==> websocket的建立使用的是protoo

---

### Redux状态容器

RoomClient使用**Redux状态容器**来记录room页面的状态参数

Redux的唯一数据源store---全局变量，通过init函数初始化，在index.jsx中被调用，并将store赋值给window对象并初始化

stateAction.js中定义了改变room的参数的actions，并 在requestAction.js中被引用，requestAction.js暴露了notify函数来展示房间状态的改变（使用的是store.dispatch()函数）

payload是什么？

### 屏幕共享的限制

mediasoup-demo client的屏幕捕捉是通过调用浏览器API实现的，只有在Chrome和FireFox浏览器中可用

### React-动态页面

index.jsx中通过render往mediasoup-demo-app-container中添加Room

components/Room.jsx定义了页面Room元素展示

### 



