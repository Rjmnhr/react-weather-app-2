import { FaMoon, FaSun } from "react-icons/fa"
import LeftSideBarStyled from "./style"

import { useApplicationContext } from "../../context/app-context";
import { useEffect, useState } from "react";
import { Switch } from "antd";


export const LeftSideBar=()=>{

const {dataArr,theme,setTheme}=useApplicationContext();
const [time, setTime] = useState(new Date());



try {
    if (dataArr.length > 0) {
    var  ListOfData = dataArr.map((data) => {
        return {
          name: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          desc: data.weather[0].description,
        };
      });
    }
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(intervalID);
  }, []);

  const icon = ListOfData
    ? `https://openweathermap.org/img/wn/${ListOfData.map(
        (city) => city.icon
      )}@2x.png`
    : null;

  const sunriseTs = ListOfData
    ? new Date(ListOfData[0].sunrise * 1000)
    : null;
  const updatedSunrise = sunriseTs
    ? sunriseTs.toLocaleTimeString()
    : "N/A";

  const sunsetTs = ListOfData ? new Date(ListOfData[0].sunset * 1000) : null;
  const updatedSunset = sunsetTs ? sunsetTs.toLocaleTimeString() : "N/A";

   const timeString=time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
});

   
   const handleTheme=()=>{
    if(theme==="light"){
      setTheme("dark");
    }else{
      setTheme("light")
    }
   
}

   


    return (
        <>
        <LeftSideBarStyled theme={theme}>
        <div className="main-container">
            <div className="city-title-container">
            <h1>{ListOfData ? ListOfData[0].name :"Not Available"}</h1>
                <h3>{ListOfData ? timeString :""}</h3>
            </div>
            <div className="weather-container">
                <div className="weather-icon-container">
                <img src={icon} alt="not available"/>
                <p style={{fontSize:"35px",color:" #ccd1d1",  fontFamily: "Avenir Next",margin:"0",padding:"0"}}> {ListOfData ? ListOfData[0].temp :"N/A"}<span style={{fontSize:"25px"}}> ˚F</span></p> 
                </div>
           
             
              <p style={{fontSize:"20px"}}>{ListOfData ? ListOfData[0].desc :""}</p>

            </div>
            <div className="sunset-sunrise-container">
                <div className="sub-container">
                <div className="icon">
                <FaSun style={{color:"white",fontSize: "26px"}}/>
                </div>
                <div className="sub-child-container" >
                <p>Sunrise</p>
                <div>
                    <h4>{updatedSunrise}</h4>
                </div>
                </div>
                   
                </div>
                <div className="sub-container">
                <div className="icon">
                <FaMoon style={{color:"white",fontSize: "26px"}}/>
                </div>
                <div className="sub-child-container" >
                <p>Sunset</p>
                <div>
                    <h4>{updatedSunset}</h4>
                </div>
                </div>
                   
                </div>
            </div>

            <div style={{margin:"10px",marginTop:"80px",padding:"8px",color: "white",display:"flex",justifyContent:"end",gap:"10px",paddingRight:"25px"}}>
              <p>Dark Mode</p>
            <Switch
             
                onChange={handleTheme}
              ></Switch>
            </div>
        </div>
        </LeftSideBarStyled>
        </>
    )

}