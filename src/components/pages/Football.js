import React, {useState} from 'react'
import {useSelector} from 'react-redux'
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

    const [selectLeague, setSelectLeague] = useState('')

    const renderMatches = previewData.map((item,index) => {

        if( item.league === selectLeague){
          return (
            <DisplayItem key={index} item={item}/>
            )          
        }
      
          return (
            selectLeague === '' && <DisplayItem key={index} item={item}/>
        )

      })
    
      return (
        <div className={classes.content}>
        
        {category === 'football' && <div className={classes.render}>
          <p onClick={() => setSelectLeague('English Premier League') }>English Premier League</p>
          <p onClick={() => setSelectLeague('Bosnian Premier League') }>Bosnian Premier League</p>
        </div>}
  
        {category === 'basketball' && <div className={classes.render}>
          <p onClick={() => setSelectLeague('Bosnian Basketball League') }>Bosnian Basketball League</p>
          <p onClick={() => setSelectLeague('Poland Basketball League') }>Poland Basketball League</p>
         
        </div>}
  
        {renderMatches}
         
        </div>
    )
}

export default Football