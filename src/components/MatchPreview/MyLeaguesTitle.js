import React from 'react'
import classes from './MyLeaguesTitle.module.css'

const MyLeaguesTitle = ({item, onClick, selectedLeague}) => {
    console.log(item)
    console.log(selectedLeague)
    return (
        <div className={classes.paragraph}>
            <p className={`${classes.league} ${selectedLeague === item && classes['active-league']}`}
               onClick={() => onClick(item)}>{item}</p>
        </div>
    )
}

export default MyLeaguesTitle