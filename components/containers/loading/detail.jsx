import React from 'react'
import { cx, css, keyframes } from 'emotion'

const Index = () => {
  const anim = keyframes`
    0% {
      background-position: 300%;
    }
    100% {
      background-position: 0%;
    }
  `
  const loadItem = css`
    height: 500px;
    div {
      margin: 8px 0px;
      background-color: #eaeaea;
      background: linear-gradient(to left,#fff, #d5d5d5, #fff);
      background-size: 400%;
      animation: ${ anim } 2s linear;animation-iteration-count: infinite;
    }
    .time, .foot {
      height: 10px;
      width: 25%;
      margin: 20px 0px;
    }
    .head {
      height: 20px;
    }
    .content {
      height: 15px;
    }
    .image {
      height: 420px;
      margin: 20px 0px;
    }
    @media screen and (max-width: 600px) {
      .image {
        height: 150px;
      }
      .time, .foot {
        width: 50%;
      }
    }
  `
  return (
    <div className={ loadItem }>
      <div className="time"></div>
      <div className="head"></div>
      <div className="head"></div>
      <div className="image"></div>
      <div className="content"></div>
      <div className="content"></div>
      <div className="content"></div>
      <div className="content"></div>
      <div className="content"></div>
      <div className="foot"></div>
    </div>
  )
}

export default Index
