import React, { useState } from 'react'
import { AiTwotoneStar } from 'react-icons/ai'
import { MdSportsSoccer } from 'react-icons/md'
import { FaBasketballBall } from 'react-icons/fa'
import { BiTennisBall } from 'react-icons/bi'
import classes from './HeaderBottom.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../features/footballSlice'

const HeaderBottom = () => {
  const [activeCategory, setActiveCategory] = useState('football')

  const dispatch = useDispatch()
  const featuresLength = useSelector(
    (state) => state.creator.selectedFeature.length
  )

  const handleClick = (category) => {
    setActiveCategory(category)
    dispatch(getCategory(category))
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes['left-content']}>
        <p
          className={`${classes.alignment} ${
            activeCategory === 'favorites' && classes['active']
          }`}
          onClick={() => handleClick('favorites')}
        >
          <AiTwotoneStar
            style={{ marginRight: '4px', width: '20px', height: '20px' }}
          />
          FAVORITES
          <span className={classes['span-counter']}>{featuresLength}</span>
        </p>
        <p
          className={`${classes.alignment} ${
            activeCategory === 'football' && classes['active']
          }`}
          onClick={() => handleClick('football')}
        >
          <MdSportsSoccer
            style={{ marginRight: '4px', width: '20px', height: '20px' }}
          />
          FOOTBALL
        </p>
        <p
          className={`${classes.alignment} ${
            activeCategory === 'basketball' && classes['active']
          }`}
          onClick={() => handleClick('basketball')}
        >
          <FaBasketballBall
            style={{ marginRight: '4px', width: '20px', height: '20px' }}
          />
          BASKETBALL
        </p>
        <p
          className={`${classes.alignment} ${
            activeCategory === 'tennis' && classes['active']
          }`}
          onClick={() => handleClick('tennis')}
        >
          <BiTennisBall
            style={{ marginRight: '4px', width: '20px', height: '20px' }}
          />
          TENNIS
        </p>
      </div>

      <div>MORE</div>
    </div>
  )
}

export default HeaderBottom
