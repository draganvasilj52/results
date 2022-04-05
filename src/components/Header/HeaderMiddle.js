import React, {useState} from 'react'
import classes from './HeaderMiddle.module.css'
import { useDispatch } from 'react-redux'
import Search from '../Search/Search'
import { Link } from 'react-router-dom'

import { Button, Collapse } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import {
 
  addSearchInputValue,
} from '../../features/footballSlice'

const HeaderMiddle = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.wrapper}>
      <Link className="navigate" to={'/'}>
        <h3>FLASHSCORE</h3>
      </Link>
      <div className={classes.order}>

      <Search />

{/* 
      <Button       onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} variant="outline-secondary"
         id="button-addon1">
     
     <AiOutlineSearch />
     </Button>
     <Collapse  in={open}>
      
        <input className={classes.input} onChange={(e) => dispatch(addSearchInputValue(e.target.value))} />
   
      </Collapse> */}
      </div>
    </div>
  )
}

export default HeaderMiddle
