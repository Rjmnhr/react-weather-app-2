import "./App.css";
import { LeftSideBar } from "./components/left-side-bar";
import { MainPage } from "./components/main-page";
import { AppContextProvider } from "./context/app-context";
import { GetData } from "./get-data/get-data";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <div style={{ background: "black" }} className="container">
          <MainPage />
          <LeftSideBar />
          <GetData />
        </div>
      </AppContextProvider>
    </div>
  );
}

export default App;
