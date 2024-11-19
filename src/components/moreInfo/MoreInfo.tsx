import { useEffect, useRef } from 'react';
import './moreInfo.css';

interface MoreInfoProps{
    visible:boolean;
}


const MoreInfo: React.FC<MoreInfoProps> = ({visible=false}) => {

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