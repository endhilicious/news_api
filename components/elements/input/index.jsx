import PropTypes from 'prop-types'
import { css } from 'emotion'

const Input = ({ style, width, textAlign, fontSize, type, handleChanges, ...props }) => {
  const baseStyle = css`
    ${ width ? `width: ${ width }%;`: `width: 100%;` }
    text-align: ${ textAlign };
    padding: 10px;
    font-size:${ fontSize }rem;
    box-sizing: border-box;
    ${ style }
  `
  const handleChange = e => {
    handleChanges(e)
  }
  return (
    type === 'text-area'
    ? <textarea onChange={ handleChanges } className={ baseStyle } rows="5" { ...props }></textarea>
    : <input onChange={ handleChanges } className={ baseStyle } type={ type } { ...props }/>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  textAlign: PropTypes.string,
  fontSize: PropTypes.number
}

Input.defaultProps = {
  type: 'text',
  textAlign: 'left',
  fontSize: 0.8
}

export default Input
