import React from 'react';
import './assets/App.css'
// React-Router具体配置
import { BrowserRouter, Route, Link, HashRouter, withRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Info from './components/Info';
import NotFound from './components/NotFound';
import { Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';


function App(props) {
  const isLogin = true;
  console.log("app", props.history)
  return (
    <BrowserRouter>
      {/* link组件一定要位于BrowserRouter中 */}
      <div>
        <Link to="/home">跳转HOME组件</Link>
        <Link to="/About">跳转About组件</Link>
      </div>
      {/* 没有指定path 无论访问什么路径，都会匹配 */}
      {/* <Route component={Info}></Route> */}
      {/* <Route path="/" component={Info}></Route> */}
      {/* 严格模式 */}
      <Route path="/" exact component={Info}></Route>
      {/* <Route path="/render" render = {()=>{return (<div>我是Render渲染</div>)}}></Route>
      <Route path="/children" children= {({match})=>{return (<div>我是Children渲染{match?match.path:'' + match}</div>)}}></Route> */}

      <Switch>
        {/* 如果第一个匹配到了，就不再往下匹配了 */}

        <Route path="/info" render={()=>{return isLogin?<Info></Info>:<Redirect to="home"></Redirect>}}></Route>

        <Route path="/" exact component={Info}></Route>
        <Route path="/home" component= {Home}></Route>
        <Route path="/about/:id" component= {About}></Route>
        <Route component= {NotFound}></Route>
      </Switch>
   
      <Link to={{pathname: '/home', search:'?name=ddd'}}></Link>
   
    </BrowserRouter>
    // <HashRouter>
    //   <Route path="/home" component= {Home}></Route>
    //   <Route path="/About" component= {About}></Route>
    // </HashRouter>
  );
}

export default withRouter(App);
