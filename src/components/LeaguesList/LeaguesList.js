import classes from "../pages/Football.module.css";
import MyLeaguesTitle from "../MatchPreview/MyLeaguesTitle";
import React from "react";

const LeaguesList = ({previewData, onClick, selectedLeague}) => {
    return (
        <div className={classes.side}>
            <p className={classes.title}>MY LEAGUES</p>
            {previewData.map((item, index) => <MyLeaguesTitle selectedLeague={selectedLeague} onClick={onClick} key={index} item={item.league}/>)}
        </div>
    )
}

export default LeaguesList