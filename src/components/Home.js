import React from 'react';
import {Route, Link} from 'react-router-dom';
// 二级路由中再渲染这两个组件
import About from './About';
import Info from './Info';

function Home (props) {
  function handleClick () {
    props.history.push('/about');
  }

  return (
    <div>
      我是HOME组件
      <button onClick={handleClick}>点击跳转</button>
      <div>
        <Link to={`${props.match.path}/one`}>二级路由1 - About</Link>
        <Link to='/home/two'>二级路由2 - Info</Link>
      </div>
      <Route path={`${props.match.path}/one`} component={About}></Route>
      <Route path='/home/two' component={Info}></Route>
    </div>
  )
}

export default Home;