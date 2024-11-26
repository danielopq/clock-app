import { useEffect, useRef, useState } from 'react';
import './quoteGenerator.css';


interface Quote {
    quoteBody: string;
    author: string;
}

/**
 * Props for the Quote component.
 * @interface QuoteProps
 * @property {boolean} visible - Determines if the section should be displayed.
 */
interface QuoteProps {
    visible: boolean;
}

/**
 * Renders the quote generator section of the website. This section displays random quotes 
 * and their authors. The visibility of the section is controlled by the `visible` prop.
 * 
 * @param {QuoteProps} props - Props passed to the component.
 * @param {boolean} props.visible - Indicates whether the section should be displayed.
 * @returns {JSX.Element} - The quote generator of the website.
 */
const QuoteGenerator: React.FC<QuoteProps> = ({ visible = true }) => {

    const [quote, setQuote] = useState<Quote>({ quoteBody: 'dddd', author: 'dddd', });
    const [error, setError] = useState<string | null>(null);

    const {quoteBody, author} = quote;


    const refQuote = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (refQuote.current) {
            visible ? refQuote.current.style.display = 'flex' : refQuote.current.style.display = 'none';
        }
    }, [visible]);

    const generateQuote = async () => {
        try {
            setError(null);
            const response = await fetch('http://localhost:5000/api/getQuote');  // Apunta al backend
            if (!response.ok) {
                throw new Error('Error fetching the quote');
            }

            const data = await response.json();
            setQuote({
                quoteBody: data.body,
                author: data.author,
            });
        } catch (err: any) {
            setError(err.message || 'Unknown error');
            console.log(error);
        }
    };

    return (
        <section ref={refQuote} id="quote">
            <div id="quoteSelector">
                <p id="quoteBody">{quoteBody}</p>
                <button id="quoteButton" onClick={generateQuote}></button>
            </div>
            <div id="author">{author}</div>
        </section>
    );
}
export default QuoteGenerator;