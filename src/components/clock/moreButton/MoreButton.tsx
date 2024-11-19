import { useState } from 'react';
import './moreButton.css';

interface MoreButtonProps{
    initialValue?: 'MORE' | 'LESS';
    displayInfo:()=>void;
}

const MoreButton: React.FC<MoreButtonProps> = ({initialValue='MORE',displayInfo}) => {
    const [value,setValue] = useState<'MORE' | 'LESS'>(initialValue);

    const handleClick = ()=>{
        value === 'MORE' ? setValue('LESS') : setValue('MORE');
        displayInfo();
    }

    return (
        <button id="moreButton" onClick={handleClick}>
            <p>{value}</p>
            <div className={value === 'MORE' ? 'arrowDown' : 'arrowUp'}></div>
        </button>
    )
}
export default MoreButton;