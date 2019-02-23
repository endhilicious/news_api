import { useState, useEffect } from 'react'
import { css } from 'emotion'
import { Color } from 'reactism/utils'
import Router from 'next/router'
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'
import PropTypes from 'prop-types'

const LoadingPage = ({ router }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setShow(true)
    })

    Router.events.on('routeChangeComplete', () => {
      setShow(false)
    })
  }, [router])

  const style = css`
    .Loading__bar___21yOt {
      z-index: 9999999999999;
    }
  `

  return (
    <div className={ style }>
      <Loading
        show={ show }
        color={ Color.primary }
        showSpinner={ false }
      />
    </div>
  )
}

LoadingPage.propTypes = {
  router: PropTypes.object
}

export default LoadingPage
