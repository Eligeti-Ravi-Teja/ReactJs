import logo from './logo.svg';
import './App.css';
// import { List1 } from './components/List1';
import List2 from './components/List2';
import List2exe from './components/List2exe';
import style from "./style.module.css"


function App() {
  return (
    <div className="App">
     {/* <List1></List1> */}
     <List2></List2>
     <List2exe ></List2exe>
     <p className={style.imgr}>Module css style</p>
    </div>
  );
}

export default App;
