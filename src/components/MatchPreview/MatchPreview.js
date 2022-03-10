import classes from '../pages/DisplayItem.module.css'
import { AiTwotoneStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

import { getFeature } from '../../features/footballSlice'
import { IconContext } from 'react-icons'

const MatchPreview = ({ match }) => {
  const dispatch = useDispatch()

  return (
    <div className={classes.info}>
      <IconContext.Provider
        value={{
          className: classes.design,
        }}
      >
        <div className={classes.star}>
          <AiTwotoneStar onClick={() => dispatch(getFeature(match))} />
        </div>
      </IconContext.Provider>

      <div className={classes.time}>
        <p>{match.matchStart}</p>
      </div>

      <div className={classes.team}>
        <p>{match.homeTeam}</p>
        <p>{match.awayTeam}</p>
      </div>

      <div className={classes.score}>
        <p>{match.homeScore}</p>
        <p>{match.awayScore}</p>
      </div>
    </div>
  )
}

export default MatchPreview
