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
    const [prevLocation, setPrevLoc] = useState("")
    const location = useLocation();

    useEffect(() => {
        setPrevLoc(location.pathname)
        setProgress(true)
        if(location.pathname === prevLocation){
            setPrevLoc('')
        }
        window.scrollTo(0, 0)
     }, [location]);
  
     useEffect(() => {
        setProgress(false)
     }, [prevLocation]);

    return(
        <>
         {progress && <TopBarProgress />}
         <Routes>{children}</Routes>
      </>
    );
};

export default CustomSwitch;