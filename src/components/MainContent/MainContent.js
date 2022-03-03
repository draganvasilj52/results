import classes from "../pages/Football.module.css";
import React from "react";

const MainContent = ({children}) => {
    return (
        <div className={classes.content}>
            {children}
        </div>
    )
}

export default MainContent