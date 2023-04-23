

import { useApplicationContext } from "../../context/app-context";

import MainPageStyled from "./style"
import {  FaFire, FaSearch, FaTemperatureHigh, FaWater, FaWind } from 'react-icons/fa';


export const MainPage=()=>{

    const {setCity,dataArr,theme}=useApplicationContext();

    const date = new Date();

const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', year: 'numeric' });

try {
    if(dataArr.length>0){

        var ListOfData=dataArr.map(data=>{
            return {
                wind:data.wind.speed,
                pressure:data.main.pressure,
                tempMax:data.main.temp_max,
                tempMin:data.main.temp_min,
                humidity:data.main.humidity,
          
            }
           
                })
    }
   

           
} catch (error) {
    
}
    
  


    const handleClick=()=>{
        const value=document.querySelector(".search-input").value;
        setCity(value);
       
    }

  
return (
    
    <MainPageStyled theme={theme}>
        <div className="main-container">
    <div className="header-container">
        <h1>{formattedDate}</h1>
        <div className="search-bar">
            <FaSearch/>
        <input className="search-input" type="text"/>
        <button onClick={handleClick}>Search</button>
        </div>
       
    </div>
<div  style={{display:"flex",width:"300px",justifyContent:"center",marginLeft:"50px",marginTop:"50px"}}>
<h2 >Today overview</h2>
</div>
    
    <div className="overview-container">
        <div>
      
       
        </div>
       
        <div className="overview-sub-container">
            <div className="card-container">
                <div className="icon">
                <FaWind style={{color:"#4771da"}}/>
                </div>
                <div className="card-sub-container" style={{margin:"8px",padding:"8px"}}>
                <h3 >Wind</h3>
               
                <h4 style={{fontFamily:"Avenir Next",display:"flex",justifyContent:"start"}} >{ListOfData ? ListOfData[0].wind :""} mph</h4>
                </div>
                
               
            </div>
            <div className="card-container">
            <div className="icon">
                <FaTemperatureHigh style={{color:"#4771da"}}/>
                </div>
                <div className="card-sub-container"  style={{margin:"8px",padding:"8px"}}>
                <h3 >Lowest/Highest</h3>
                <h4 style={{fontFamily:"Avenir Next",display:"flex",justifyContent:"start"}} >{ListOfData ? ListOfData[0].tempMin :""} ˚F / {ListOfData ? ListOfData[0].tempMax :""} ˚F</h4>
                </div>
           
            </div>
            <div className="card-container">
            <div className="icon">
                <FaWater style={{color:"#4771da"}}/>
                </div>
                 <div className="card-sub-container"  style={{margin:"8px",padding:"8px"}}>
                 <h3 >Pressure</h3>
                 <h4 style={{fontFamily:"Avenir Next",display:"flex",justifyContent:"start"}} > {ListOfData ? ListOfData[0].pressure :""} hpa</h4>
                 </div>

            </div>
            <div className="card-container">
            <div className="icon">
                <FaFire style={{color:"#4771da"}}/>
                </div>
                <div className="card-sub-container"  style={{margin:"8px",padding:"8px"}}>
                <h3>Humidity</h3>
                <h4 style={{fontFamily:"Avenir Next",display:"flex",justifyContent:"start"}} >{ListOfData ? ListOfData[0].humidity :""} %</h4>
                </div>
           
            </div>
        </div>
    </div>
    <div>
    
    </div>

    
   
    </div>
    </MainPageStyled>
    
)
}