import { React, useState, useEffect } from 'react'

function ReadingBar() {
  //useEffect to control the component lifecycle
  useEffect(() => {
    window.addEventListener('scroll', scrollHeight)
    return () => window.removeEventListener('scroll', scrollHeight)
  })

  //Width State
  const [width, setWidth] = useState(0)
  // scroll function
  const scrollHeight = () => {
    var el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100
    // store percentage in state
    setWidth(percent)
  }
  return (
    <div
      className="fixed top-0 left-0 z-40 h-1 bg-primary-500 dark:bg-primary-300"
      style={{ width: width + '%' }}
    ></div>
  )
}
export default ReadingBar
