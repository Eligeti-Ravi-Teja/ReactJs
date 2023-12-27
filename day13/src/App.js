import logo from './logo.svg';
import './App.css';
import UseState1 from './Components/UseState1';
import UseStateObj from './Components/UseStateObj';
import UseStateArr from './Components/UseStateArr';

function App() {
  return (
    <div className="App">
      <UseState1></UseState1>
      <UseStateObj></UseStateObj>
      <UseStateArr></UseStateArr>
    </div>
  );
}

export default App;
