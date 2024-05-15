import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div.attrs(({
  size, top, bottom, width, centered
}) => ({
  size,
  top: top || size,
  bottom: bottom || size,
  width,
  centered,
}))`
  margin: auto;
  padding-top: ${props => props.top}px;
  padding-bottom: ${props => props.bottom}px;
  ${({ width }) => width && `
    max-width: ${width}px;
  `}
  ${({ centered }) => centered && `
    display: flex;
    justify-content: center;
  `}
`

Container.defaultProps = {
  size: 8,
  centered: false,
}

Container.propTypes = {
  size: PropTypes.number,
  top: PropTypes.number,
  bottom: PropTypes.number,
  width: PropTypes.number,
  centered: PropTypes.bool,
}

export default Container
