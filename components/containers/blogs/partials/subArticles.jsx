import { css } from 'emotion'
import { Link } from 'reactism/routes'

const Index = ({ items }) => {

  const baseStyle = css`
    min-height: 250px;
    padding: 10px 0px;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: 20px;
    a {
      text-decoration: none;
      color: #000;
    }
    .div-creator-date {
      margin: 0px 0px 7px;
      .creator-date {
        font-size: 0.8rem;
        opacity: 0.3;
      }
    }

    .title-article {
      font-size: 1.3rem;
      line-height: 28px;
      margin: 0px;
      font-weight:500;
      cursor: pointer;
    }
    .content {
      font-size: 0.85rem;
      opacity: 0.7;
      line-height: 24px;
      margin: 9px 0px;
    }
    .category {
      font-size: 0.85rem;
      color: #1798D1;
    }
    .img-articles {
      background-image: url("https://pagefair.com/wp-content/uploads/2013/09/blog6.jpg");
      background-size: cover;
      height: 200px;
      background-position: center;
    }
    @media screen and (max-width: 900px) and (min-width: 600px) {
      min-height: 400px;
    }
    @media screen and (max-width: 600px) {
      /* .content, .title-article {
        text-align: justify;
      } */
      .article-wrap {
        padding-bottom: 50px;
      }
    }
  `

  const ArticleStyleList = css`
    @media screen and (max-width: 900px) and (min-width: 600px) {
      width: 100%;
    }
  `
  return (
    <>
      <div className={ baseStyle }>
        <div className={ ArticleStyleList }>
          <Link route="articles" params={{ id: items.id }}>
            <a>
              <div className="img-articles"></div>
            </a>
          </Link>
        </div>
        <div className={ ArticleStyleList }>
          <div className="article-wrap">
            <Link route="articles" params={{ id: items.id }}>
              <a>
                <p className="title-article">{ items.title }</p>
              </a>
            </Link>
            <div className="contents-article">
              <p className="content">{ items.body }</p>
            </div>
            <div className="action">
              <div className="category">Category is here</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
