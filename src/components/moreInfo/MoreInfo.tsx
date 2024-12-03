import { useEffect, useRef } from 'react';
import './moreInfo.css';

interface MoreInfoProps{
    visible:boolean;//Indicates whether the component is visible or not.
    timeZone:string;//The current Time zone.
    dayOfYear:number;//The current day of the year (1-365/366).
    dayOfweek:number;//current number day of the week.
    weekNumber:number;//The current week number of the year.
}

/**
 * The `MoreInfo` component displays additional information including:
 * - The current time zone.
 * - The current day of the year.
 * - The current day of the week.
 * - The current week number of the year.
 * 
 * The component's visibility is controlled by the `visible` prop.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.visible - Controls whether the component is displayed.
 * @param {string} props.timeZone - The current time zone.
 * @param {number} props.dayOfYear - The current day of the year.
 * @param {number} props.dayOfweek - The current day of the week.
 * @param {number} props.weekNumber - The current week number of the year.
 * 
 * @returns {JSX.Element} - The rendered MoreInfo component.
 */
const MoreInfo: React.FC<MoreInfoProps> = ({visible=false,timeZone,dayOfYear,dayOfweek,weekNumber}) => {

    const refMoreInfo = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(refMoreInfo.current){
            visible ? refMoreInfo.current.style.display = 'inline-flex' : refMoreInfo.current.style.display = 'none'
        }
        
    },[visible]);
    return (
        <section ref={refMoreInfo} id="moreInfo">
            <div>
                <div className='moreInfoContainer'>
                    <div>
                        <p className='moreInfoHeader'>CURRENT TIMEZONE</p>
                        <p className='moreInfoText'>{timeZone}</p>
                    </div>
                    <div>
                        <p className='moreInfoHeader'>DAY OF THE YEAR</p>
                        <p className='moreInfoText'>{dayOfYear}</p>
                    </div>
                </div>
                <div id="moreInfoSeparator"></div>
                <div className='moreInfoContainer'>
                    <div>
                        <p className='moreInfoHeader'>DAY OF THE WEEK</p>
                        <p className='moreInfoText'>{dayOfweek + 1}</p>
                    </div>
                    <div>
                        <p className='moreInfoHeader'>WEEK NUMBER</p>
                        <p className='moreInfoText'>{weekNumber}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MoreInfo; 