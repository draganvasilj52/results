import React from 'react'
import { useSelector } from 'react-redux'
import MatchPreview from '../MatchPreview/MatchPreview'

const Favorites = () => {
  const favoriteMatches = useSelector((state) => state.creator.selectedFeature)
  console.log(favoriteMatches)
  return (
    <div>
      {favoriteMatches.map((x) => (
        <MatchPreview match={x} />
      ))}
    </div>
  )
}

export default Favorites
