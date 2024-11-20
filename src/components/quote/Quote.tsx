import { useEffect, useRef } from 'react';
import './quote.css';


/**
 * Props for the Quote component.
 * @interface QuoteProps
 * @property {boolean} visible - Determines if the section should be displayed.
 */
interface QuoteProps {
    visible: boolean;
}

/**
 * Renders the quote section of the website. This section displays random quotes 
 * and their authors. The visibility of the section is controlled by the `visible` prop.
 * 
 * @param {QuoteProps} props - Props passed to the component.
 * @param {boolean} props.visible - Indicates whether the section should be displayed.
 * @returns {JSX.Element} - The Quote section of the website.
 */
const Quote: React.FC<QuoteProps> = ({ visible = true }) => {

    const refQuote = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (refQuote.current) {
            visible ? refQuote.current.style.display = 'flex' : refQuote.current.style.display = 'none';
        }
    }, [visible]);

    return (
        <section ref={refQuote} id="quote">
            <div id="quoteSelector">
                <p id="quoteText">
                    “The science of operations, as derived from mathematics more especially, is a science of
                    itself, and has its own abstract truth and value.”
                </p>
                <button id="quoteButton"></button>
            </div>
            <div id="author">Ada Lovelace</div>
        </section>
    );
}
export default Quote;