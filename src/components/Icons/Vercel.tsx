import * as React from 'react'

function SvgVercel(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  )
}

export default SvgVercel
