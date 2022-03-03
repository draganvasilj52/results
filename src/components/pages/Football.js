import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import MyLeaguesTitle from '../MatchPreview/MyLeaguesTitle'
import DisplayItem from './DisplayItem'
import classes from './Football.module.css'
import LeaguesList from "../LeaguesList/LeaguesList";
import MainContent from "../MainContent/MainContent";

const Football = () => {
    const [selectedLeague, setSelectedLeague] = useState('')

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


    const handleClick = (item) => {
        setSelectedLeague(item)
    }

    useEffect(() => {
        setSelectedLeague(null)
    }, [category])

    const renderMatches = previewData.map((item, index) => {
        if (selectedLeague) {
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
            <LeaguesList selectedLeague={selectedLeague} previewData={previewData} onClick={handleClick}/>
            <MainContent>
                {renderMatches}
            </MainContent>
        </div>
    )
}

export default Football