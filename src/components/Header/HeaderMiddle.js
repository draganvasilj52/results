import React from 'react'
import classes from './HeaderMiddle.module.css'

import Search from '../Search/Search'

const HeaderMiddle = () => {
  return (
    <div className={classes.wrapper}>
      <h3>FLASHSCORE</h3>

      <div className={classes.order}>
        <Search />
      </div>
    </div>
  )
}

export default HeaderMiddle
