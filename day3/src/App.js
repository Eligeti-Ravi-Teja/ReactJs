import logo from './logo.svg';
import './App.css';
import { Cprops,Cpropsdes } from './components/ClassProps';
import { StateEx,StateEx1 } from './components/State';
import { Adding } from './components/count';
function App() {
  return (
    <div className="App">
     <Cprops name="raviteja" like="coding"></Cprops>
     <Cpropsdes name="bunny" like="ReactJs"></Cpropsdes>
     <StateEx></StateEx>
     <StateEx1></StateEx1>
     <Adding></Adding>
    </div>
  );
}

export default App;
