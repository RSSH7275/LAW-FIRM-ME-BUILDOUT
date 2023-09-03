import logo from './logo.svg';
import LawFirm from './Components/LawFirm/LawFirm';
import LawIntro from './Components/LawIntro/LawIntro';
import LawCard from './Components/LawCard/LawCard';
import LawPractice from './Components/LawPractice/LawPractice';
import LawClients from './Components/LawClients/LawClients';
import LawTeam from './Components/LawTeam/LawTeam';
import FaqInfo from './Components/FaqInfo/FaqInfo';
import SubscLetter from './Components/SubscLetter/SubscLetter';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
    <div className="App">
      <LawFirm/>
    </div>
      <div className='lawBody'>
      <LawIntro/>
      <LawCard/>
      <LawPractice/>
      <LawClients/>
      <LawTeam/>
      <FaqInfo/>
      <SubscLetter/>
      </div>
      <div className='footer'>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
