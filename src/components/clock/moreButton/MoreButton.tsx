import { useState } from 'react';
import './moreButton.css';

interface MoreButtonProps{
    initialValue?: 'MORE' | 'LESS'; //Indicates the initial button state, either 'MORE' or 'LESS'. Suggests to the user whether they want to show or hide the additional info.
    displayInfo:()=>void; // Function to toggle the visibility of the additional information and quote section.
}

/**
 * A button component that toggles between showing and hiding additional information.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.initialValue='MORE'] - The initial button state ('MORE' or 'LESS').
 * @param {Function} props.displayInfo - Callback function to toggle additional information visibility.
 * 
 * @returns {JSX.Element} - The rendered MoreButton component.
 */
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