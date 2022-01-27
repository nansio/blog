**/gulpfile.js**

app: npm start: gulp live

broswerSync(

​	host: config.domain

​	startPath: '/info=true',

​	....

)

配置了入口为index.jsx文件===>

---

****

**/index.jsx**

解析URL

​	randomString生成peerId	

​	若无roomId,则randomString生成长8的字符串作为roomId,更新url

​	处理URL中用户自定义字段，生成邀请链接

​	若url或者cookie中不存在displayName，randomName生成之

redux更新状态

创建RoomClient实例

React: render()将roomClient作为props  

