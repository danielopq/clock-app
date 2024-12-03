import './app.css';
import QuoteGenerator from './components/quote/QuoteGenerator';
import Clock from "./components/clock/Clock";
import MoreInfo from './components/moreInfo/MoreInfo';
import { useEffect, useState } from 'react';
import { fetchDateZone } from './components/utils/fetchDateZone';
import { fetchIsDay } from './components/utils/fetchIsDay';

interface DateZone {
  timeZone: string;
  location: string;
  localTime: string;
  dayOfYear: number;
  dayOfweek: number;
  weekNumber: number;
  abbreviation: string;
}

interface DisplayedInfo {
  quoteDisplayed: boolean,
  moreInfoDisplayed: boolean,
}

/**
 * Main application component that controls the visibility 
 * of different sections: Quote, Clock, and MoreInfo.
 * @returns {JSX.Element} - The main application element.
 */
function App() {

  /* ################## VISIBLE SECTION ##################*/

  const [infoVisibility, setInfoVisibility] = useState<DisplayedInfo>({
    quoteDisplayed: true,
    moreInfoDisplayed: false,
  })

  const { quoteDisplayed, moreInfoDisplayed } = infoVisibility;

  const displayInfo = () => {
    const newInfoVisibility: DisplayedInfo = {
      quoteDisplayed: false,
      moreInfoDisplayed: false,
    }

    quoteDisplayed === false ? newInfoVisibility.quoteDisplayed = true : newInfoVisibility.moreInfoDisplayed = true;
    setInfoVisibility(newInfoVisibility);
  }

  /* ################## DETERMINES IF IS DAY TIME ##################*/

  useEffect(() => {
    const getIsDay = async () => {
      const newIsDay = await fetchIsDay();
      if (newIsDay !== undefined) {
        setIsDay(newIsDay);
      }
    };
    getIsDay();

    const intervalId = setInterval(getIsDay, 100000);
    return () => clearInterval(intervalId);
  }, []);

  /* ################## DATE, TIME AND AREA INFO ##################*/

  const [isDay, setIsDay] = useState<boolean>(true);
  const [dateZone, setDateZone] = useState<DateZone>({
    timeZone: '',
    location: '',
    localTime: '',
    dayOfYear: 0,
    dayOfweek: 0,
    weekNumber: 0,
    abbreviation: ''
  });

  const { timeZone, location, localTime, dayOfYear, dayOfweek, weekNumber, abbreviation } = dateZone;

  useEffect(() => {
    const getDateZone = async () => {
      const newDateZone = await fetchDateZone();
      if (newDateZone) {
        setDateZone(newDateZone);
      }
    };
    getDateZone();

    const intervalId = setInterval(getDateZone, 15000);
    return () => clearInterval(intervalId);
  }, []);

  return (
<<<<<<< HEAD
    <main>
      <QuoteGenerator visible={quoteDisplayed}/>
      <Clock displayInfo={displayInfo}/>
      <MoreInfo visible={moreInfoDisplayed}/>
=======
    <main className={isDay ? 'dayTimePic' : 'nightTimePic'}>
      <div>
        <Quote visible={quoteDisplayed} />
        <Clock displayInfo={displayInfo} isDay={isDay} localTime={localTime} abbreviation={abbreviation} location={location} />
        <MoreInfo visible={moreInfoDisplayed} timeZone={timeZone} dayOfYear={dayOfYear} dayOfweek={dayOfweek} weekNumber={weekNumber} />
      </div>
>>>>>>> ffce0b5
    </main>
  )
}
export default App
