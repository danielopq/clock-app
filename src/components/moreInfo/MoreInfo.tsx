import './moreInfo.css';

const MoreInfo: React.FC = () => {
    return (
        <section id="moreInfo">
            <div>
                <div className='moreInfoContainer'>
                    <div>
                        <p className='moreInfoHeader'>CURRENT TIMEZONE</p>
                        <p className='moreInfoText'>Europe/London</p>
                    </div>
                    <div>
                        <p className='moreInfoHeader'>DAY OF THE YEAR</p>
                        <p className='moreInfoText'>295</p>
                    </div>
                </div>
                <div id="moreInfoSeparator"></div>
                <div className='moreInfoContainer'>
                    <div>
                        <p className='moreInfoHeader'>DAY OF THE WEEK</p>
                        <p className='moreInfoText'>5</p>
                    </div>
                    <div>
                        <p className='moreInfoHeader'>WEEK NUMBER</p>
                        <p className='moreInfoText'>45</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MoreInfo; 