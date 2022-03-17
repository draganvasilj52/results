import React from 'react'
import Flag from 'react-world-flags'
import classes from './CountryFlag.module.css'
const CountryFlag = ({ code }) => {
  console.log(code)
  return (
    <div className={classes.por}>
      <Flag code={code} height="12px" width="18px" />
    </div>
  )
}

export default CountryFlag
