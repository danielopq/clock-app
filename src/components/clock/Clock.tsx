import './clock.css';
import MoreButton from './moreButton/MoreButton';

interface ClockProps{
    displayInfo:()=>void;
}

const Clock: React.FC<ClockProps> = ({displayInfo}) => {
    return (
        <section id="clock">
            <div id="clockGreatings">
                <div id="clockIcon" className='dayTimeIcon'></div>
                <p id="greatings">GOOG MORNIG, IT'S CURRENTLY</p>
            </div>
            <div id="clockTime">
                <span id="time">11:37</span>
                <span id="timeZone">BST</span>
            </div>
            <div id="clockLocation">
                <p>IN LONDON,UK</p>
                <MoreButton displayInfo={displayInfo}/>
            </div>
        </section>
    )
}
export default Clock;