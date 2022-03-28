import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import classes from './Search.module.css'
import { filterMatches } from '../../features/footballSlice'
import { useDispatch } from 'react-redux'
const Search = () => {
  const [active, setActive] = useState(false)
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filterMatches(text))
  }, [text, dispatch])

  return (
    <div className={`${classes.search} ${active && classes.active}`}>
      <input
        value={text}
        type="text"
        className={classes.text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className={classes.btn}
        onClick={() => setActive((state) => !state)}
      >
        <AiOutlineSearch fill="#001e28" size={20} />
      </button>
    </div>
  )
}

export default Search
