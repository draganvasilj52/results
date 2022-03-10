import classes from './DisplayItem.module.css'
import MatchPreview from '../MatchPreview/MatchPreview'
import CountryFlag from '../CountryFlag/CountryFlag'

const DisplayItem = ({ item }) => {
  return (
    <div className={classes.live}>
      <div className={classes.title}>
        <CountryFlag code={item.country} />
        <p>{item.league}</p>
      </div>
      {item.matches.map((match, index) => (
        <MatchPreview match={match} key={index} />
      ))}
    </div>
  )
}

export default DisplayItem
