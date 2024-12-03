/**
 * Generates a greeting based on the provided time in "HH:MM" format.
 * @param {string} time - Time in 24-hour format (e.g., "13:20").
 * @returns {string} Greeting based on the time of day.
 */

const generateGreeting = (time:string)=> {
    const hours:number = parseInt(time.substring(0,2));
    if (hours >= 6 && hours < 12) {
        return "GOOD MORNING";
    } else if (hours >= 12 && hours < 17) {
        return "GOOD AFTERNOON";
    } else if (hours >= 17 && hours < 21) {
        return "GOOD EVENING";
    } else {
        return "GOOD NIGHT";
    }
}
export default generateGreeting;