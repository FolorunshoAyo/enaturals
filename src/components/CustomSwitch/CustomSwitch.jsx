import React, { useEffect, useState } from "react"
import { Routes, useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
    barColors: {
      "0": "#acbfa3",
    },
    shadowBlur: 5
});

const CustomSwitch = ({children}) => {
    const [progress, setProgress] = useState(false)
    const [prevLoc, setPrevLoc] = useState("")
    const location = useLocation();

    useEffect(() => {
        setPrevLoc(location.pathname)
        setProgress(true)
        if(location.pathname === prevLoc){
            setPrevLoc('')
        }
        window.scrollTo(0, 0)
     }, [location]);
  
     useEffect(() => {
        setProgress(false)
     }, [prevLoc]);

    return(
        <>
         {progress && <TopBarProgress />}
         <Routes>{children}</Routes>
      </>
    );
};

export default CustomSwitch;