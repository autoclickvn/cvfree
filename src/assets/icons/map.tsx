interface Props {
  width?: number
  height?: number
  className?: string
}

const MapIcon: React.FC<Props> = (props) => {
  const { width, height, className } = props
  return (
    <svg
      className={className}
      version="1.1"
      fill="none"
      width={width || 15}
      height={height || 20}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      stroke="currentColor"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g>
        <path
          style={{ fill: '#010002' }}
          d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
			c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
			C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
			s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"
        />
      </g>
    </svg>
  )
}

export default MapIcon
