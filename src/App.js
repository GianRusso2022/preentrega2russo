
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage"
import { CategoryPage } from './pages/CategoryPage';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/category/:categoryId"} element={<CategoryPage />} />
       
      </Routes>
    </BrowserRouter>

    // <div classNameName="App">
    //   <NavBar />
    //   <main className="container">
    //     <AppContainer />
    //   </main>
    // </div>



  );
}

export default App;
