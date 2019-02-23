import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        {/* <script type="text/javascript">
          window.$zopim||(function(d,s){var z=$zopim=function(c){ z._.push(c)},$=z.s= d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set. _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8'); $.src='https://v2.zopim.com/?zFQEx5AOtc14qUCzknMcta2F8bsEldHr';z.t=+new Date;$. type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');
        </script>  */}
      </html>
    )
  }
}
