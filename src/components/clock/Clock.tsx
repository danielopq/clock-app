import './clock.css';

const Clock: React.FC = () => {
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
                <button id="moreButton">
                    <p>MORE</p>
                    <div className='arrowDown'></div>
                </button>
            </div>
        </section>
    )
}
export default Clock;