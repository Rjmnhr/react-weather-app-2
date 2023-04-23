/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useApplicationContext } from "../context/app-context";

export const GetData=()=>{
    const {city,setDataArr}=useApplicationContext();

    const fetchData=()=>{
        
           try {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8109965e7254a469d08a746e8b210e1e&units=imperial`).then(async response=>{
                const data = await response.json();
                const dataValue = [data];
                setDataArr(dataValue);
              
            })
           } catch (error) {
            console.log(error);
           }
       
    }
    
    useEffect(()=>{
        fetchData();   
    },[city]);

}