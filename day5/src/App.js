import logo from './logo.svg';
import './App.css';
import { ConRender } from './components/ConRender';
import EleVarRender from './components/EleVarRender';
import { TernaryConRen } from './components/TernaryConRen';
import ShortRender from './components/ShortRender';

function App() {
  return (
    <div className="App">
    <ConRender></ConRender>
    <EleVarRender></EleVarRender>
    <TernaryConRen></TernaryConRen>
    <ShortRender></ShortRender>
    </div>
  );
}

export default App;
