# ADB通过WLAN连接到Android设备(Android10及更低版本)

1. 首先使用USB连上ADB(即确保USB连接情况下, abd devices能正确显示设备)

2. `adb tcpip 5555`让设备监听5555端口上的TCPIP连接
3. 拔掉设备的USB线, 不拔也可以
4. `adb connect phone_ip:5555` 通过IP地址连接到设备
5. `adb disconnect phone_ip:5555` 断开连接

### USB拔线后`adb devices`显示设备`offline`

在拔掉数据线后，检查USB调试是否开启

打开`开发者选项中`的 <u>**仅充电模式下允许ADB调试**</u>

> learn from [菠菜奋起](https://blog.csdn.net/u013250424/article/details/105616276)，and from [adb官方教程](https://developer.android.com/studio/command-line/adb#wireless)