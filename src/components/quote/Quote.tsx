import { useEffect, useRef } from 'react';
import './quote.css';

interface QuoteProps{
    visible:boolean;
}

const Quote:React.FC<QuoteProps> = ({visible=true})=>{

    const refQuote = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(refQuote.current){
            visible ? refQuote.current.style.display = 'flex' : refQuote.current.style.display = 'none';
        }
    },[visible]);

    return(
        <section ref={refQuote} id="quote">
            <div id="quoteSelector">
                <p id="quoteText">
                “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”
                </p>
                <button id="quoteButton"></button>
            </div>
            <div id="author">Ada Lovelace</div>
        </section>
    );
}
export default Quote;