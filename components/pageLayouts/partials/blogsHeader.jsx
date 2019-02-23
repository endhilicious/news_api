import { css } from 'emotion'
import { findDOMNode } from 'react-dom'
import { Link } from 'reactism/routes'
import { withRouter } from 'next/router'
import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayProduct : false,
      displayKnowMore : false,
      toogleNav : true,
      toogleSearch : true,
      search: ''
    }
  }
  componentDidUpdate() {
    document.addEventListener('click', this.handleDocumentClick, false)
    document.addEventListener('touchend', this.handleDocumentClick, false)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false)
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  handleDocumentClick = e => {
    if (this) {
      if (!findDOMNode(this).contains(e.target)) {
        this.setState({ toogleNav : true, displayProduct : false, displayKnowMore : false, toogleSearch : true })
      }
    }
  }

  handleToggle = value => {
    const { displayProduct, displayKnowMore } = this.state;

    if (value === 'displayProduct') {
      // setDisplayProduct(!displayProduct)
      this.setState({ displayProduct: !displayProduct})
      displayKnowMore === true && this.setState({ displayKnowMore : !displayKnowMore })
    }
    if (value === 'displayKnowMore') {
      this.setState({ displayKnowMore : !displayKnowMore })
      displayProduct === true && this.setState({ displayProduct: !displayProduct})
    }
  }

  menuClick = () => {
    this.setState({ toogleNav : true, displayProduct : false, displayKnowMore : false })
  }

  onChangeInputSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    const { handleToggle, menuClick } = this;
    const { styleColorTextHeader, position } = this.props;
    const { displayProduct, displayKnowMore, toogleNav, toogleSearch } = this.state;

    const mainStyle = css`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700,700i');
    font-family: 'Ubuntu', sans-serif;
    position: fixed;
    z-index: 1;
    box-shadow: ${ position < 0 ? `0px -9px 25px 0px rgba(0,0,0,0.8)` : `unset` };
    background-color: #fff;
    width: 100%;
    margin: 0px;
    a {
      text-decoration: none;
    }
    .hamburger {
      cursor: pointer;
      padding-top: 5px;
      width: 10%;
      float: right;
      transition: 0.5s;
      div {
        user-select: none;
        background-color: #000;
        height: 2px;
        margin: 6px 0px;
        transition: 0.5s;
      }
    }
    .cross {
      width: 10%;
      float: right;
      transition: 0.5s;
      div:nth-child(1) {
        transform: rotate(-45deg);
        margin-top: 13px;
        transition: 0.5s;
      }
      div:nth-child(2) {
        transform: rotate(45deg);
        margin-top: -6px;
        transition: 0.5s;
      }
      div:nth-child(3) {
        transform: rotate(45deg);
        margin-top: -6px;
        transition: 0.5s;
      }
      div {
        user-select: none;
        background-color: #000;
        height: 2px;
        margin: 4px 0px;
      }
    }
    .sub-menu{
      overflow: inherit;
      margin: -30px 0px -30px -14px;
      height: 110px;
      padding: 10px 0px;
      li {
        width: 25%;
        a {
          padding: 10px;
          span{
            margin-right:10px;
          }
        }
      }
    }
    .blogs-link {
      border-left: 1px solid lightgrey;
      position: absolute;
      font-size: 2rem;
      margin-left: 7px;
      padding-left: 10px;
      color: #1798D1;
    }
    .responsive {
      display: block;
      transition: all 0.5s linear;
    }
    .hamburger, .cross {
      display: none;
    }
    @media screen and (max-width: 900px) and (min-width: 600px) {
      .main-menu {
        overflow: scroll;
        li {
          margin: 0px;
          a {
            display: inline-block;
            padding: 7px;
          }
        }
      }

    }
    @media screen and (max-width: 600px) {
      margin: 0px;
      ul {
        li {
          margin: 15px 0px;
          width: 100%;
        }
      }
      .sub-menu {
        height: 200px;
        li {
          text-align: center;
          width: 50%;
          a {
            padding: 0px;
          }
        }
      }
      .responsive {
        display: none;
        transition: all 0.5s linear;
      }
      .hamburger, .cross {
        display: block;
      }
    }
    .search-section {
      float: right;
    }
    .hidden-search {
      display: none;
    }
    .close-icon {
      position: absolute;
      cursor: pointer;
      font-size: 31px;
      margin: -11px 0px 0px 21px;
    }
    .sub-menu-responsive {
      display: none;
    }
    .subscribe-wrap {
      padding: 20px 10px;
      input {
        margin-bottom: 10px;
      }
    }
    @media screen and (max-width: 900px) and (min-width: 600px) {
      .close-icon {
        margin: 0px;
      }
    }
    @media screen and (max-width: 600px) {
      .sub-menu-responsive {
        display: block;
        ul {
          li {
            width: 50%;
            font-size: 0.6rem;
          }
        }
      }
      .display-important-600 {
        display: none;
      }
      .main-menu {
        float: left;
      }
      .close-icon {
        display: none;
      }
      .search-button {
        display: none;
      }
      .hidden-search {
        display: block;
      }

    }
  `
  const mainGridStyle = css`
    background-color: #fff;
    height: 60px;
    width: 60%;
    margin: auto;
    @media screen and (max-width: 600px) {
      width: 90%;
    }
  `
  const gridMenuStyle = css`
    margin-bottom: 20px;
  `
  return (
    <div className={ mainStyle }>
      <div className={ mainGridStyle }>
        <div className={ gridMenuStyle }>
          <div>
            <div className={ toogleNav ? 'hamburger' : 'cross' } onClick={ () => this.setState({ toogleNav : !toogleNav })}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <Link to="blogs">
            <a className="blogs-link">
              <span>Blog</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
  }
}

export default withRouter(Header);
