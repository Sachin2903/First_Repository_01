
import './App.css';
import {Reactbenefits} from './ReactBenefits/ReactBenefits.js'
import {Button} from './Button/Button.js'
import {Reactlogo} from './Reactlogo/Reactlogo.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Reactlogo/>
        <Reactbenefits/>
        <Button/>
        

      </header>
    </div>
  );
}

export default App;
