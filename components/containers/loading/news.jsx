import React from 'react'
import { css, keyframes } from 'emotion'

const Index = () => {
  const anim = keyframes`
    0% {
      background-position: 300%;
    }
    100% {
      background-position: 0%;
    }
  `
  const loadingData = css`
    margin: 20px 0px;
    min-height: 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    div.div1 {
      height: 200px;
      background-color: #eaeaea;
      background: linear-gradient(to left,#fff, #d5d5d5, #fff);
      background-size: 400%;
      animation: ${ anim } 2s linear;animation-iteration-count: infinite;
    }
    div.div2 {
      div {
        background-color: #eaeaea;
        height: 10px;
        background: linear-gradient(to left,#fff, #d5d5d5, #fff);
        background-size: 400%;
        animation: ${ anim } 2s linear;animation-iteration-count: infinite;
        margin: 10px 0px;
      }
      div:nth-child(1) { margin: 0px; width: 80% }
    }
    @media screen and (max-width: 600px) {
      grid-template-columns: unset;
    }
  `
  return (
    <div className={ loadingData }>
      <div className="div1"></div>
      <div>
        <div className="div2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="div2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      </div>
  )
}

export default Index
