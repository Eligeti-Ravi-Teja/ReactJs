import logo from './logo.svg';
import './App.css';
import Event from './components/event';
import { BindingEvent } from './components/BindingEvent';
import { BindInRender } from './components/BindInRender';
import { BindArrow } from './components/BindArrow';
import { BindConst } from './components/BindConst';
import { MethosArrow } from './components/MethosArrow';
import { ParentComp } from './components/ParentComp';

function App() {
  return (
    <div className="App">
      <Event></Event>
      {/* <BindingEvent></BindingEvent>  error because of not binding */}
      <BindInRender></BindInRender>
      <BindArrow></BindArrow>
      <BindConst></BindConst>
      <MethosArrow></MethosArrow>
      <ParentComp></ParentComp>
    </div>
  );
}

export default App;
