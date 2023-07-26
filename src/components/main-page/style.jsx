import styled from "styled-components";

const MainPageStyled=styled.div`
*{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding: 0;
    margin: 0;
}
.main-container{
    width: 924px;
    height: 100vh;
    background-color: ${(props)=>(props.theme === "light" ? "white" :"black")};
    color:${(props=>props.theme==="light"? "black" : "gray")};
    margin: 0;
    padding:10PX;
    
   
}
  .header-container {

    display: flex;
    justify-content: space-around;
    margin: 10px;
    padding: 10px;
 
    color:${(props=>props.theme==="light"? "#112b50" : "white")};

    }
    .overview-container{
        display: flex;
        /* flex-direction: column; */
        color:${(props=>props.theme==="light"? "black" : "white")};
        align-items: center;
        
      
   

        
    }

    .overview-sub-container{
        height: 300px;
       
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      
        margin: 10px;
         padding: 10px;
         width: 100%;
         color:${(props=>props.theme==="light"? "black" : "#9a9a9a")};

        

        
       
    }

    .card-container{
        

        height: 6rem;
    min-width: 16rem;
    width: 300px;
    margin: 0.4rem 1.4rem;
    background-color:${(props=>props.theme==="light"? "#eef3f3" : "#2d2d2d")};
    display: flex;
    align-items: center;
    border-radius: 0.6rem;
    padding: 0 1rem;
        
    }

    .card-container h3{
        color:${(props=>props.theme==="light"? "gray" : "white")};
    }

    .search-bar{
        flex: 1;
    background-color:${props=>props.theme==="light"?"#eef3f3" : " #b9b9b9"};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    padding: 0.8rem 1.2rem;
    margin-left: 4.6rem;
}



.search-bar input{
    background: none;
    outline: none;
    border: none;
    flex: 1;
    margin-left: 0.6rem;

}

.search-bar button{
    border: none;
    background-color: #112b50;
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
    margin: -0.4rem 0;
    cursor: pointer;
    color: white;
}

.card-sub-container{
    display: flex;
    flex-direction: column;
    gap: 7px;
}
.overview-header{
    margin-top: 30px;
    display:flex;
    justify-content: start;
    margin-left: 110px;
    color:gray
}




    @media (max-width: 768px) {
    
        .main-container{
            width: 100%;
            height: 70vh;
        }

        .search-bar{
            width: 80%;
            margin-left: 0.2rem;
            padding: 0.5rem 0.8rem;
            height: 30px;
        }
        .search-bar button{
            margin: 0;
        }

        .header-container h1{
            font-size:20px;
        }
.header-container{
    margin: 8px;
    padding: 8px;
  
    justify-content:center;
    align-items: center;
    gap: 20px;
    flex-direction: column-reverse;
}
.card-container{
  
    margin: 10px 10px;
    height: 5rem;
    width:170px;
    min-width: 180px;

   

    }
    .overview-sub-container{
        margin: 5px;
        padding:5px;
        overflow: auto;
    }
    .overview-header{
        justify-content: center;
        margin-left: 0;
    }

}




    


`

export default MainPageStyled;