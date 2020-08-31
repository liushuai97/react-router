React Router介绍

v5 v2 v3 v4
v4/v5  用法和理念基本一致
v2/v3 差异较大

版本差异

v4和v4之前版本比较  
 v4: 大多数项目使用的稳定版本，v4属于动态路由
     react-router | 路由基础库
     react-router-dom | 适用于浏览器环境的再次封装
     react-router-native | 适用于react-native环境的再次封装
     react-router-config | 静态路由配置
 v4之前版本：静态路由
 v5 vs V4: 
    完全兼容v4
    支持React16版本的新特性
    兼容react之前的一些版本
    消除了严格模式的警告
    使用create-react-context 实现 context api
    v4.4 ^ react-router: "^4.3.1" 导致报错 跳过至 v5
    稳定性、兼容性、一系列的改进与新特性
    >=15 React版本的完全兼容，react16提供了一个更好的支持
    升级了react context api，消除了所有严格模式的警告
    对发布的所有绑定包，进行了严格测试
    引入了预优化  build process.env.NODE_ENV
    import Router from 'react-router/Reouter' -> import {Router, Switch} from 'react-router'
    简化了一些发布过程
  
新特性：
能够在 支持数组
<Router path={['user/:id', 'info/>:id']} component={User}>
BUG的修复
<Link innerRef> <Route component> 使用React.forwardRef

目前的React Router版本中，已经不需要路由配置，现在一切皆组件

前端路由

原理：检测浏览器URL的变化，截获URL地址，然后进行URL路由匹配
hash: 锚点 hashchange  - #
hash刷新页面不会发送请求

html5: history - pushState() | replaceState() | onpopstate 事件
注意点：页面刷新时，浏览器会向服务器发送请求

安装
react web router -> router-router-dom
react native router -> router-router-native

第一个基础路由配置
组件：HashRouter/BrowserRouter Route


React Router常见概念

Router组件：每个Router 都会创建一个history对象，用来保持当前位置的追踪，

web项目

提供了两种路由 HashRouter（只处理静态的URL）/BrowserRouter（非静态占站点，要处理不同的URL）

react native项目

MemoryHistory组件

Route组件：
只是一个具有渲染方法的普通React组件，路由匹配成功就会渲染该组件
常用属性：
    path：'' 路由匹配规则，可以省略，字符串类型
    exact：boolean true  定义严格模式/非严格模式
    component：要渲染的组件
    render：渲染函数形式 逻辑操作   - path路径匹配url时执行
    children：渲染函数形式 逻辑操作  - 在任何时候都会执行，match{} null

优先级 children > component > render

Switch组件
最多只能匹配一个组件
作用，可以将Route组件分组


Link与NavLink组件

Link声明式可访问导航，属性：
1、to: string类型 {pathname, search, hash, state}
2、replace： boolean true，替换当前历史记录

NavLink特殊版本的Link，当于当前URL匹配时可以添加样式
activeClassName activeStyle
exact

Redirect组件
重定向组件 to是必须的
to: 字符串类型，对象类型
push: boolean true 会将新地址推送到history history.push
from: 将要进入的URL
exact: boolean true 严格模式匹配

History对象
每个Router都会创建一个History对象，用来保持当前位置的追踪
编程式导航 - push方法

withRouter 组件
是否经过路由匹配

动态路由

路由规则不是预先确定的，在渲染过程中确定的
info/1 infp/2
:id
props.match.params.id

嵌套路由
二级路由
子组件中再进行路由配置即可
