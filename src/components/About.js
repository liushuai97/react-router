import React from 'react';

function About (props) {
  return (
    <div>
      我是About组件
      <p>获取到的参数：{props.match.params.id}</p>
    </div>
  )
}

export default About;