import styled from "styled-components";

const LeftSideBarStyled=styled.div`

*{
    
  
    padding: 0;
    margin: 0;

}
.main-container{
    width: 400px;
    height: 100vh;
    background-color: ${(props=>props.theme==="light"? "#112b50" : "#091628")} ;
    padding: 10px;
}
    .city-title-container,.weather-container{
        display: flex;
        justify-content: space-between;
        margin: 10px;
        padding: 5px;
        color:white;
        align-items: center;
        margin: 10px;
        padding: 10px;
    }
    .sub-container{
        /* height: 80px; */
        width:80%;
     display: flex;
    align-items: center;
    margin-top: 1.6rem;
    background-color:   ${(props=>props.theme==="light"? " #294269" : "#082143")}  ;
    padding: 1rem 1.2rem;
    border-radius: 0.6rem;
    border: 1px #6180b9 solid;
    

    }

    .sunset-sunrise-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .sub-child-container{
        margin-left: 8px;
        padding-left: 8px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        /* border:1px solid black; */
      
    }
    
    .sub-child-container p{
        color:gray;
        
    }
    .sub-child-container h4{
        color:white;
    }

    h3,h4,h2,p,h1{
margin: 0;
padding: 0;
    }

   


.weather-icon-container{
    display: flex;
    align-items: center;
    margin: 0;
    height: 100px;
    width: 300px;
    
}

.weather-container{
    padding-left: 0;
    margin-left: 0;
}

@media (max-width: 768px) {
    .main-container{
        width:100%;
               
    }
}

`

export default LeftSideBarStyled;