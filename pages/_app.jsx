import React from 'react'
import App, { Container } from 'next/app'
import { css } from 'emotion'
import MainLayout from 'reactism/layout'
import { LoadingPage } from 'reactism/elements'
// Redux
import { initStore } from 'reactism/config/store'
import { Provider } from 'react-redux'
import withRedux from "next-redux-wrapper"


class MyApp extends App {
  constructor(props){
    super(props);
    this.state = {
      position:0,
      state:'',
    };
  }
  static async getInitialProps({ Component, ctx, ...props }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  registerServiceWorker () {
    if (process.env.NODE_ENV === 'production' && "serviceWorker" in navigator) {
      navigator.serviceWorker
      .register('/service-worker.js')
      .then(registrations => {
        console.log("service worker registration successful")
      })
      .catch(err => {
        console.warn("service worker registration failed", err.message)
      })
    }
  }

  componentDidMount () {
    this.registerServiceWorker()
  }

  componentDidUpdate () {
    this.registerServiceWorker()
  }

  render () {
    const { Component, pageProps, store } = this.props
    const styleRoot = css`
      @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i');
      font-family: 'Ubuntu', sans-serif;
    `
    return (
      <Container>
        <Provider store={ store }>
          <MainLayout className={ styleRoot }>
            <LoadingPage />
            <Component {...pageProps} />
          </MainLayout>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initStore)(MyApp)
