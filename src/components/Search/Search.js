import React, { useState, useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import classes from './Search.module.css'
import {
  addSearchInputValue
} from '../../features/footballSlice'
import { useDispatch} from 'react-redux'
const Search = () => {
  console.log('rendered')
  const [active, setActive] = useState(false)
  const [text, setText] = useState('') 
  const inputRef = useRef()
  const dispatch = useDispatch()
  
    const handleChange = (e) => {
    setText(e.target.value)
    dispatch(addSearchInputValue(e.target.value))
  } 

  const handleRef = () => {
    setActive(true) 
    inputRef.current.focus()
  }


  const handleClick = () => {
    setActive(false)   
  }

  return (
    <div className={`${classes.search} ${active && classes.active}`}>
      
      <input   
      onChange={handleChange}
      ref={inputRef}
        value={text} 
        type="text"
        className={classes.text}
      />
      <button
        type="submit"
        className={classes.btn}
        onClick={() => !active ? handleRef() : handleClick()}
      >
        <AiOutlineSearch fill="#001e28" size={30} />
      </button>
    </div>
  )
}

export default Search
