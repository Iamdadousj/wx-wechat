微信小程序官方组件//
文档正在不断完善中。。。。。
基础要求JavaScript必须扎实，
微信小程序基于mvvm框架，基于xml构建了自己独特的框架样式；
原文档：
组件内容---
视图容器
基础内容
表单组件
导航
<web-view><web-view>
媒体组件
地图
画布
接口内容---
开放接口
界面
设备
网络
媒体
位置
数据
在原文档基础上新增一些新的物件；
接口新增内容---
商品规格
详情页使用
微信地址调用
组件---
优惠卷
分享组件
登录授权，更新modal,采用自定义组件
扫码调取手机摄像头，本地相册
search百度查询
查询数据库数据

番外篇：
编辑工具
1、使用腾讯为自家应用量身定制的微信开发者工具；
2、可以使用目前大多数开发者习惯的vscode开发工具，配置相关插件进行解码wxsss；
代码活用
小程序是基于mvvm框架定制开发，所以vue也可以用于生产微信小程序，目前最程序的事mpvue框架；


自定义组件使用方法：
conponents--外部文件
 --dialog(自定义文件名)
   --dialog.js
   Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 弹窗标题
    title: {
      type: String,
      value: '标题' // 默认值
    },
    // 弹窗内容
    content: {
      type: String,
      value: '弹窗内容'
    },

    // 弹窗确认按钮文字
    confirmText: {
      type: String,
      value: '确定'
    }
  },

  /**
   * 组件内私有数据
   */
  data: {
    // 弹窗显示控制
    isShow: false
  },

  /**
   * 组件的公有方法列表
   */
  methods: {

    //隐藏弹框
    hideDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //展示弹框
    showDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    /**
    * triggerEvent 组件之间通信
    */
    confirmEvent() {
      this.triggerEvent("confirmEvent");
    },

    bindGetUserInfo() {
      this.triggerEvent("bindGetUserInfo");
    }

  }
})
   --dialog.json
 {
  "component": true, 
  "usingComponents": {}
}

   --dialog.wxml---
   <view class='dialog-container' wx:if="{{isShow}}">
    <view class='dialog-mask'></view>
    <view class='dialog-info'>
        <view class='dialog-title'>{{title}}</view>
        <view class='dialog-content'>{{content}}</view>
        <view class='dialog-footer'>
          <button class='dialog-btn' open-type="getUserInfo" bindgetuserinfo='bindGetUserInfo' catchtap='confirmEvent'>{{confirmText}}</button>
        </view>
        <slot>
        
        </slot>
    </view>
</view>
   --dialog.wxss
使用
在另一文件调用
<dialog>
<view></view>
</dialog>
代码片段调用





插件的使用：