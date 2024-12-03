import { useEffect, useRef, useState } from 'react';
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
 * Structure of a single quote object returned by the API.
 * @interface Data
 * @property {string} content - The content of the quote.
 * @property {string} author - The author of the quote.
 */
interface Data {
    quote: string;
    author: string;
}

/**
 * State structure for handling quote data and API status.
 * @interface FetchResponse
 * @property {Data | null} data - The quote fetched from the API, or null if not yet loaded.
 * @property {boolean} isLoading - Indicates if the API request is still in progress.
 * @property {string | null} error - Error message if the API request fails, or null if no error occurred.
 */
interface FetchResponse {
    data: Data | null;
    isLoading: boolean;
    error: string | null;
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

    // State to manage the fetched quote, loading status, and error message.
    const [quote, setQuote] = useState<FetchResponse>({
        data: null,
        isLoading: true,
        error: null,
    });

    const { data, isLoading, error } = quote;

    /**
     * Resets the quote state to its initial loading state.
     * This is useful for indicating a new request is in progress.
     */
    const reSetLoadingState = (): void => {
        setQuote({
            data: null,
            isLoading: true,
            error: null,
        });
    };

    /**
     * Fetches a new quote from the API and updates the component's state.
     * Handles loading, success, and error states.
     * Uses a proxy API route to ensure compatibility in production and development.
     */
    const fetchQuote = async () => {
        reSetLoadingState();
        try {
            const resp = await fetch('https://dummyjson.com/quotes/random');
            if (!resp.ok) {
                setQuote({
                    data: null,
                    isLoading: false,
                    error: resp.statusText,
                });
                return;
            }

            const responseData = await resp.json();

            setQuote({
                data: responseData,
                isLoading: false,
                error: null,
            });
        } catch (err) {
            setQuote({
                data: null,
                isLoading: false,
                error: err instanceof Error ? err.message : 'Unknown error',
            });
            console.log(err);
        }
    };

    useEffect(() => {
        if (refQuote.current) {
            visible ? refQuote.current.style.display = 'flex' : refQuote.current.style.display = 'none';
        }
    }, [visible]);

    useEffect(() => {
        fetchQuote();
    }, [])

    return (
        <section ref={refQuote} id="quote">
            <div id="quoteSelector">
                <p id="quoteText">
                    {data !== null ? data.quote : isLoading ? 'Loading...' : error}
                </p>
                <button id="quoteButton" aria-label="Get new quote" onClick={fetchQuote}></button>
            </div>
            <div id="author">{data !== null && data.author}</div>
        </section>
    );
}
export default Quote;