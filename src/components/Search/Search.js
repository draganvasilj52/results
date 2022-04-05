import React, { useState, useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import classes from './Search.module.css'
import {
  addSearchInputValue,
} from '../../features/footballSlice'
import { useDispatch } from 'react-redux'
const Search = () => {
  const [active, setActive] = useState(false)
  const [text, setText] = useState('') 
  const inputRef = useRef()
  const dispatch = useDispatch()

/*     const handleChange = (e) => {
    setText(e.target.value)
    dispatch(filterMatches(e.target.value))
  } 
 */

  const handleFilter = () => {
    
   dispatch(addSearchInputValue(text)) 
  }

  const handleRef = () => {

    setActive(true) 
    inputRef.current.focus()

  }

  return (
    <div className={`${classes.search} ${active && classes.active}`}>
      
      <input
      
      onBlur={() => setActive(false)}
   //  onChange={(e) => dispatch(addSearchInputValue(e.target.value))}
     //  onChange={handleChange}
     ref={inputRef}
     onChange={e => setText(e.target.value)}
         value={text} 
        type="text"
        className={classes.text}
      />
      <button
        type="submit"
        className={classes.btn}
        onClick={() => !active ? handleRef() : handleFilter()}
      >
        <AiOutlineSearch fill="#001e28" size={30} />
      </button>
    </div>
  )
}

export default Search
