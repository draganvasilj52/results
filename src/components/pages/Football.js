import React, {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import MyLeaguesTitle from '../MatchPreview/MyLeaguesTitle'
import DisplayItem from './DisplayItem'
import classes from './Football.module.css'

const Football = () => {
    const category = useSelector(state => state.creator.selectedCategory)
    const matches = useSelector(state => state.creator.matches)

    let matchesLocal = matches;

    const sportsSelected = matchesLocal.filter(item => item.category === category)

    const prepareMatches = () => {
        let leagues = sportsSelected.map(match => match.league)
        let distinctLeagues = [...new Set(leagues)]
        return distinctLeagues.map(liga => {
            let match = matchesLocal.filter(match => match.league === liga)
            return {
                league: liga,
                matches: match
            }
        })
    }

    let previewData = prepareMatches();

    const [selectedLeague, setSelectedLeague] = useState('')

    const handleClick = (item) => {
      setSelectedLeague(item)        
    }

    useEffect(() => {
      setSelectedLeague(null)
    }, [category])

    const renderMatches = previewData.map((item,index) => {
      if(selectedLeague){
        return (
          selectedLeague === item.league && <DisplayItem key={index} item={item}/>
        ) 
      } 
      return (
        <DisplayItem key={index} item={item}/>
      )
      })
    
      return (
        <div className={classes.main}>

          <div className={classes.side}>           
            <p className={classes.title}>MY LEAGUES</p>       
            {previewData.map((item,index) => <MyLeaguesTitle  onClick={handleClick} key={index} item={item.league}  />)}
          </div>

          <div className={classes.content}>
            {renderMatches}  
          </div>

      </div>
    )
}

export default Football