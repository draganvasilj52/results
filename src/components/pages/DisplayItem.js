import classes from './DisplayItem.module.css'
import MatchPreview from '../MatchPreview/MatchPreview'
import CountryFlag from '../CountryFlag/CountryFlag'
import AddMatchModal from '../BootStrap/AddMatchModal'
import { useState } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'

const DisplayItem = ({ item, category }) => {
  const [show, setShow] = useState(false)

  return (
    <div className={classes.live}>
      <div className={classes.title}>
        <div className={classes['title-left']}>
          <CountryFlag code={item.country} />
          <p>{item.league}</p>
        </div>

        <div className={classes['title-right']}>
          <BsFillPlusSquareFill
            cursor={'pointer'}
            fill="#001e28"
            size={'18px'}
            onClick={() => setShow(true)}
          />
        </div>
      </div>
      {item.matches.map((match, index) => (
        <MatchPreview match={match} key={index} />
      ))}
      <AddMatchModal
        category={category}
        country={item.country}
        league={item.league}
        show={show}
        setShow={setShow}
      />
    </div>
  )
}

export default DisplayItem
