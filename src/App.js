
import './App.css';
import CounterApp from './component/CounterApp';
import {CounterContextProvider} from './context'
import Userr from './component/Userr';
function App() {
  return (
    <>
    <CounterContextProvider>
    <CounterApp />
  </CounterContextProvider>
  <Userr/>
  </>
    

  );
}

export default App;
