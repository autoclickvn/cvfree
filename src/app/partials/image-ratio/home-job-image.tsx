// import DefaultImage from 'assets/images/img-default-job.png'
import styled from 'styled-components'

interface Props {
  src?: string | null
  alt?: string
  style?: React.CSSProperties
  styleDiv?: React.CSSProperties
  className?: string
  classNameDiv?: string
}

const StyleComponent = styled.div`
  position: relative;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const ImageJob: React.FC<Props> = (props) => {
  const { src, alt, style, className, styleDiv, classNameDiv } = props
  return (
    <StyleComponent style={{ ...styleDiv }} className={classNameDiv}>
      <img className={`${className} rounded-md`} src={src || ''} style={{ ...style }} alt={alt || 'image job'} />
    </StyleComponent>
  )
}
