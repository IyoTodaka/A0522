import React from 'react'
import { useMediaQuery } from 'react-responsive'

function ReactResponsiveComponent() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)'})
    const isMobile = useMediaQuery({ query: '(max-width: 767px)'})
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)'})
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)'})

  return (
    <>
        <h3>React Responsive</h3>
        {isDesktopOrLaptop && <p>You are a desktop/laptop</p>}
        {isMobile && <p>You are a mobile device</p>}
        <p>You are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
        {isRetina && <p>You are retina</p>}
    </>
  )
}

export default ReactResponsiveComponent