import React from 'react'
import { css } from 'emotion'

const Footer = () => {
  const rootStyle = css`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700,700i');
    font-family: 'Ubuntu', sans-serif;
    width:100%;
    background-color: #3D6CAB;
    float:left;
    height: 100px;
  `
  
  return (
    <div className={ rootStyle }>
    </div>
  )
}
export default Footer
