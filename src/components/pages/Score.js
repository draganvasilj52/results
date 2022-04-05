import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import DisplayItem from './DisplayItem'
import classes from './Score.module.css'
import LeaguesList from '../LeaguesList/LeaguesList'
import MainContent from '../MainContent/MainContent'
import Favorites from '../Favorites/Favorites'

const Score = () => {
  const [selectedLeague, setSelectedLeague] = useState('')

  const category = useSelector((state) => state.creator.selectedCategory)
  const matches = useSelector((state) => state.creator.matches)

  const userInput = useSelector((state) => state.creator.inputValue)

  let matchesLocal = matches

  const sportsSelected = matchesLocal.filter(
    (item) => item.category === category
  )

  const prepareMatches = () => {
    let leagues = sportsSelected.map((match) => match.league)
    let distinctLeagues = [...new Set(leagues)]
    let filterMatches = matchesLocal.filter(
      (match) =>
        match.homeTeam.toLowerCase().includes(userInput) ||
        match.awayTeam.toLowerCase().includes(userInput)
    )

    return distinctLeagues.map((liga) => {
      let match = filterMatches.filter((match) => match.league === liga)
  
      let flags = match.map((x) => x.countryCode)

      let flag = flags[0]


      if (!flag) {
        return {
          league: '',
          matches: '',
          country: '',
        }
      }

      return {
        league: liga,
        matches: match,
        country: flag,
      }
    })
  }

  let previewData = prepareMatches()

  const handleClick = (item) => {
    setSelectedLeague(item)
    if (selectedLeague) {
      setSelectedLeague(item)
    }
    if (selectedLeague === item) {
      setSelectedLeague(null)
    }
  }

  useEffect(() => {
    setSelectedLeague(null)
  }, [category])

  const renderMatches = previewData.map((item, index) => {
    if (selectedLeague) {
      return (
        selectedLeague === item.league && (
          <DisplayItem key={index} item={item} />
        )
      )
    }
    return (
      item.country && (
        <DisplayItem category={category} key={index} item={item} />
      )
    )
  })

  return (
    <div className={classes.main}>
      <LeaguesList
        selectedLeague={selectedLeague}
        handleClick={handleClick}
        previewData={previewData}
      />

      <MainContent>
        {category !== 'favorites' ? renderMatches : <Favorites />}
      </MainContent>
    </div>
  )
}

export default Score
