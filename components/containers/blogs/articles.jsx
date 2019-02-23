import { css } from 'emotion'
import Articles from './partials/article'


const Index = () => {
  const gridStyle = css`
    width: 60%;
    margin: auto;
    @media screen and (max-width: 600px) {
      width: 90%;
    }
  `
  const baseStyle = css`
    padding: 100px 0px;
  `
  return (
    <>
      <div className={ gridStyle }>
        <div className={ baseStyle }>
          <Articles />
        </div>
      </div>
    </>
  )
}

export default Index
