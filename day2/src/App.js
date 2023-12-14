import logo from './logo.svg';
import './App.css';
import { FunctionalExample,NoJSX } from './components/fun';
import { ClassGreet,ClassGreetNoJSX} from './components/classcomp';
import { PropFun,PropFun2 } from './components/propfun';

function App() {
  return (
    <div className="App">
      <FunctionalExample></FunctionalExample>
      <NoJSX></NoJSX>
      {/* <ClassGreet></ClassGreet> */}
      {/* <ClassGreetNoJSX></ClassGreetNoJSX> */}
      <PropFun name="Ravi Teja">
        <p>Unknown prop</p>
      </PropFun>
      <PropFun2>
        <h2> Unknown prop data displaying</h2>
      </PropFun2>
    </div>
  );
}

export default App;
