import './app.css';
import Quote from "./components/quote/Quote";
import Clock from "./components/clock/Clock";
import MoreInfo from './components/moreInfo/MoreInfo';

function App() {
  return (
    <main className='dayTimePic'>
      <Quote/>
      <Clock/>
      <MoreInfo/>
    </main>
  )
}
export default App
