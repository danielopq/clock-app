
//data full extructure:

// interface Data {
//     utc_offset: string;
//     timezone: string;
//     day_of_week: number;
//     day_of_year: number;
//     datetime: string;
//     utc_datetime: string;
//     unixtime: number;
//     raw_offset: number;
//     week_number: number;
//     dst: boolean;
//     abbreviation: string;
//     dst_offset: string;
//     dst_from: string | null;
//     dst_until: string | null;
//     client_ip: string;
// }

interface DateZone {
    timeZone: string; //The current time zone (e.g., "America/New_York").
    location:string; //The current location.
    localTime:string; //The current local time.
    dayOfYear: number; //The current day number of the week (0-6, where 0 is Sunday).
    dayOfweek: number; //The current day number of the week.
    weekNumber: number; //The current week number of the year (1-52/53).
    abbreviation:string; //The abbreviation for the local time zone (e.g., "EST", "GMT").
}

/**
 * Fetches the current date, time, and location information from the World Time API.
 * 
 * @async
 * @function
 * @returns {Promise<DateZone | undefined>} - An object containing time zone, location, local time,
 * day of the year, day of the week, week number, and time zone abbreviation.
 * Returns `undefined` if an error occurs.
 */
export const fetchDateZone = async ():Promise<DateZone | undefined> => {
    let dateZone: DateZone | null = null;

    try {
        const response = await fetch("https://worldtimeapi.org/api/ip");
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        const currentDate = new Date(data.datetime);
        dateZone = {
            timeZone: data.timezone,
            location: data.timezone.split('/')[1],
            localTime:currentDate.toISOString().slice(11,16),
            dayOfYear: data.day_of_year,
            dayOfweek: data.day_of_week,
            weekNumber: data.week_number,
            abbreviation: data.abbreviation
        }
        return(dateZone);
    } catch (err) {
        console.log(err)
    }
}