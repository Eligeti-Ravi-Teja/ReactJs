import logo from './logo.svg';
import './App.css';
import { Passing } from './Components/Passing';
import ClickIncre from './Components/ClickIncre';
import HoverIncre from './Components/HoverIncre';
import A from './Components/A';
import { provider } from './Components/context';


function App() {
  return (
    <div className="App">
     <Passing render={(count,increment)=>(
      <ClickIncre count={count} increment={increment} ></ClickIncre>
     )}></Passing>
     <Passing render={(count,increment)=>{
      <HoverIncre count={count} increment={increment}></HoverIncre>
     }}></Passing>
     <provider value="using context">
     <A></A>
     </provider>
    </div>
  );
}

export default App;
