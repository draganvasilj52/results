import classes from '../pages/Score.module.css'
import React from 'react'

const MainContent = ({ children }) => {
  return <div className={classes.content}>{children}</div>
}

export default MainContent
