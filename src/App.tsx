import './app.css';
import Quote from "./components/quote/Quote";
import Clock from "./components/clock/Clock";
import MoreInfo from './components/moreInfo/MoreInfo';
import { useState } from 'react';

function App() {
  

  interface DisplayedInfo{
      quoteDisplayed:boolean,
      moreInfoDisplayed:boolean,
  }

  const [infoVisibility,setInfoVisibility] = useState<DisplayedInfo>({
    quoteDisplayed:true,
    moreInfoDisplayed:false,
  })

  const {quoteDisplayed,moreInfoDisplayed} = infoVisibility; 

  const displayInfo = ()=>{
    const newInfoVisibility:DisplayedInfo={
      quoteDisplayed:false,
      moreInfoDisplayed:false,
    }

    quoteDisplayed === false ? newInfoVisibility.quoteDisplayed = true : newInfoVisibility.moreInfoDisplayed = true;
    setInfoVisibility(newInfoVisibility);
  }

  return (
    <main>
      <Quote visible={quoteDisplayed}/>
      <Clock displayInfo={displayInfo}/>
      <MoreInfo visible={moreInfoDisplayed}/>
    </main>
  )
}
export default App
