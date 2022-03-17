import classes from './DisplayItem.module.css'
import MatchPreview from '../MatchPreview/MatchPreview'
import CountryFlag from '../CountryFlag/CountryFlag'
import AddMatchModal from '../BootStrap/AddMatchModal'

const DisplayItem = ({ item, category }) => {
  console.log(item)
  return (
    <div className={classes.live}>
      <div className={classes.title}>
        <div className={classes['title-left']}>
          <CountryFlag code={item.country} />
          <p>{item.league}</p>
        </div>

        <div className={classes['title-right']}>
          <AddMatchModal
            category={category}
            country={item.country}
            league={item.league}
          />
        </div>
      </div>
      {item.matches.map((match, index) => (
        <MatchPreview match={match} key={index} />
      ))}
    </div>
  )
}

export default DisplayItem
