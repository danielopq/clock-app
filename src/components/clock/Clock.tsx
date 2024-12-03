import './clock.css';
import MoreButton from './moreButton/MoreButton';
import generateGreeting from './utils/getGreating';

interface ClockProps {
    displayInfo: () => void; // Toggles the visibility of the additional info and quote section.
    isDay: boolean; // Indicates if it's daytime or nighttime.
    localTime: string; // The current local time in string format.
    location: string; // The name of the location.
    abbreviation: string; // The abbreviation for the local time zone.
}

/**
 * The Clock component displays:
 * - The current time.
 * - A greeting based on the time of day.
 * - The location name in uppercase.
 * - An icon indicating whether it's day or night.
 * - A button to toggle additional information.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.displayInfo - Function to toggle the visibility of additional info and quotes.
 * @param {boolean} props.isDay - Indicates if it's day (`true`) or night (`false`).
 * @param {string} props.localTime - The current local time.
 * @param {string} props.abbreviation - The local time zone abbreviation.
 * @param {string} props.location - The location name.
 * @returns {JSX.Element} - The rendered Clock component.
 */
const Clock: React.FC<ClockProps> = ({ displayInfo,isDay,localTime,abbreviation,location }) => {

    return (
        <section id="clock">
            <div id="clockGreatings">
                <div id="clockIcon" className={isDay ? 'dayTimeIcon' : 'nigthTimeIcon'}></div>
                <p id="greatings">{generateGreeting(localTime)}<span id="currently">, IT'S CURRENTLY</span></p>
            </div>
            <div id="clockTime">
                <p id="time">{localTime}</p>
                <p id="timeZone">{abbreviation}</p>
            </div>
            <div id="clockLocation">
                <p>IN {location.toUpperCase()}</p>
                <MoreButton displayInfo={displayInfo} />
            </div>
        </section>
    )
}
export default Clock;