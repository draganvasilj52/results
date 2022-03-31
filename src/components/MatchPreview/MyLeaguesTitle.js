import React from 'react'
import classes from './MyLeaguesTitle.module.css'

const MyLeaguesTitle = ({ item, handleClick, selectedLeague }) => {
  return (
    <div className={classes.paragraph}>
      {item && (
        <p
          className={`${classes.league} ${
            selectedLeague === item && classes['active-league']
          }`}
          onClick={() => handleClick(item)}
        >
          {item}
        </p>
      )}
    </div>
  )
}

export default MyLeaguesTitle
