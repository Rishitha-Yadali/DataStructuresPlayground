
import './App.css';
import Home from "./components/Home"
import List from "./components/Lists"
import Tuple from "./components/Tuple"
import MySet from "./components/MySet"
import Dictionary from "./components/Dictionary"
import Array from "./components/Array"
import Object from "./components/Object"
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const App=() =>{
  return (
    <BrowserRouter>
     <Routes>
       <Route exact path="/" Component={Home} />
       <Route exact path="/list" Component={List}/>
       <Route exact path="/tuple" Component={Tuple}/>
       <Route exact path="/set" Component={MySet}/>
       <Route exact path="/dictionary" Component={Dictionary}/>
       <Route exact path="/array" Component={Array}/>
       <Route exact path="/object" Component={Object}/>
     </Routes>
        
    </BrowserRouter>
    
  );
}

export default App;
