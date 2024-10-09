import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AllRoutes from "./routes";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfigure } from "./store/homeslice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();

  const apiFetching = () =>{
    fetchDataFromApi('/configuration').then((response)=>{
      const url ={
        backdrop:response?.images?.secure_base_url + "original",
        backdrop:response?.images?.secure_base_url + "original",
        backdrop:response?.images?.secure_base_url + "original",
      }
      dispatch(getApiConfigure(url));
    })
  }

  useEffect(()=>{
    apiFetching();
  },[])

  return (
    <div className="App" style={{ background: "#0f1014" }}>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
    </div>
  );
}

export default App;
