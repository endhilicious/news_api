import React, { Component } from 'react';
import Seo from './partials/seo'
import Header from './partials/blogsHeader'
import Footer from './partials/blogsFooter'
import './style.css'

class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      position:0,
    };
  }
  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    this.setState({ position : document.body.getBoundingClientRect().top });
  }
  render() {
    return (
      <>
        <Seo title={ this.props.title }/>
        <Header stylecolortextheader={ this.props.styleColorTextHeader } position={ this.state.position }/>
        <section { ...this.props }>
          { this.props.children }
        </section>
        <Footer />
      </>
    );
  }
}

export default Index;

