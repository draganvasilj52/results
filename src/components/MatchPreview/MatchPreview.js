import classes from '../pages/DisplayItem.module.css'
import { AiTwotoneStar } from 'react-icons/ai'
import { useDispatch,useSelector } from 'react-redux'
import { getFeature } from '../../features/footballSlice'


const MatchPreview = ({ match }) => {
  const dispatch = useDispatch()
  
  const featuredMatches = useSelector(state => state.creator.selectedFeature)
  const featureMatch = featuredMatches.find(x => x.id === match.id)
  console.log(featureMatch)
  return (
    <div className={classes.info}>
     
        <div className={classes.star}>
          <AiTwotoneStar fill={featureMatch ? 'yellow' : '#c8cdcd'} className={classes.design}  onClick={() => dispatch(getFeature(match))} />
        </div>
     

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
