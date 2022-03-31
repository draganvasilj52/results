import React from 'react'
import classes from './HeaderMiddle.module.css'

import Search from '../Search/Search'
import { Link } from 'react-router-dom'

const HeaderMiddle = () => {
  return (
    <div className={classes.wrapper}>
      <Link className="navigate" to={'/'}>
        <h3>FLASHSCORE</h3>
      </Link>
      <div className={classes.order}>
        <Search />
      </div>
    </div>
  )
}

export default HeaderMiddle
