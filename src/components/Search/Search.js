import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import classes from './Search.module.css'
import {
  filterMatches,
  addSearchInputValue,
} from '../../features/footballSlice'
import { useDispatch } from 'react-redux'
const Search = () => {
  const [active, setActive] = useState(false)
  /*   const [text, setText] = useState('') */

  const dispatch = useDispatch()

  /*   const handleChange = (e) => {
    setText(e.target.value)
    dispatch(filterMatches(text))
  } */

  return (
    <div className={`${classes.search} ${active && classes.active}`}>
      <input
        onChange={(e) => dispatch(addSearchInputValue(e.target.value))}
        /*       value={text} */
        type="text"
        className={classes.text}
      />
      <button
        type="submit"
        className={classes.btn}
        onClick={() => setActive((state) => !state)}
      >
        <AiOutlineSearch fill="#001e28" size={30} />
      </button>
    </div>
  )
}

export default Search
