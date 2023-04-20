import logo from './logo.svg';
import './App.css';
import { Email } from './email/email';
function App() {
  return (
    <div >
      
         <Email subject={"Birthday party Invitation"} receiver={"jaGdish@gmail.com"} from={"jaGdish"} event={"birthday party"} flist={"Ritu , Saurabh , Kartik"} address={"Green field Avenue"} cpname={"JaGdish"}/>
        
      
    </div>
  );
}

export default App;
