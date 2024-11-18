import './quote.css';

const Quote:React.FC = ()=>{
    return(
        <section id="quote">
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