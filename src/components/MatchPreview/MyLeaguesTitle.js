import React from 'react'
import classes from './MyLeaguesTitle.module.css'
const MyLeaguesTitle = ({item, onClick}) => {

  return (
   
    
    <div className={classes.paragraph}>
        
        <p className={classes.league} onClick={()=> onClick(item)}>{item}</p>
    </div>
   

  )
}

export default MyLeaguesTitle