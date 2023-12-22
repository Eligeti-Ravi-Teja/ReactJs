import logo from './logo.svg';
import './App.css';
import { PortalEx } from './Components/PortalEx';
import { ErrorBound } from './Components/ErrorBound';
import { ErrorCatch } from './Components/ErrorCatch';

function App() {
  return (
    <div className="App">
      <PortalEx></PortalEx>
      <ErrorCatch>
      <ErrorBound name="ravi"></ErrorBound>
      <ErrorBound name="bunny"></ErrorBound>
      <ErrorBound name="none"></ErrorBound>
      </ErrorCatch>
    </div>
  );
}

export default App;
