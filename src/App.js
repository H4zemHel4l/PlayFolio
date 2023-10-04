import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Library from "./components/Library/Library";
import Update from "./components/Update";
import Info from "./components/Home/Info";
import Add from "./components/Home/Add"
import Delete from "./components/Home/Delete";
import Edit from "./components/Home/Edit";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path={'/'} element={<Home/>}></Route>
              <Route path={'/library'} element={<Library/>}></Route>
              <Route path={'/update-library/:id'} element={<Update/>}></Route>
              <Route path={'/info/:id'} element={<Info/>}></Route>
              <Route path={'/add'} element={<Add/>}></Route>
              <Route path={'/delete/:id'} element={<Delete/>}></Route>
              <Route path={'/edit/:id'} element={<Edit/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
