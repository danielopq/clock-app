
// Data full structure example from the API:

/* {
    "location": {
      "continent_code": "NA",
      "continent_name": "North America",
      "country_code2": "US",
      "country_code3": "USA",
      "country_name": "United States",
      "country_name_official": "United States of America",
      "is_eu": false,
      "state_prov": "California",
      "state_code": "US-CA",
      "district": "Santa Clara",
      "city": "Mountain View",
      "zipcode": "94043-1351",
      "latitude": 37.4224,
      "longitude": -122.08421
    },
  
    "date": "2024-11-04",
    "current_time": "04:24:04.939",
    "sunrise": "06:37",
    "sunset": "17:06",
    "sun_status": "-",
    "solar_noon": "11:51",
    "day_length": "10:29",
    "sun_altitude": -26.720690286733994,
    "sun_distance": 148361706.39355108,
    "sun_azimuth": 89.66947559541882,
    "moonrise": "09:56",
    "moonset": "19:01",
    "moon_status": "-",
    "moon_altitude": -59.84017619349532,
    "moon_distance": 396436.927965668,
    "moon_azimuth": 80.87803466587684,
    "moon_parallactic_angle": -62.15740140382433,
    "moon_phase": "WAXING_CRESCENT",
    "moon_illumination_percentage": "8.24",
     "moon_angle": 33.35668681050102
   }
*/


/**
 * Determines whether the current time falls within the daytime period (between sunrise and sunset).
 * 
 * @param {string} currentTime - The current local time in "HH:MM" format.
 * @param {string} sunriseTime - The local sunrise time in "HH:MM" format.
 * @param {string} sunsetTime - The local sunset time in "HH:MM" format.
 * @returns {boolean} - `true` if it's daytime, `false` if it's nighttime.
 */
const isDaytime = (currentTime:string, sunriseTime:string, sunsetTime:string):boolean => {
    /**
     * Converts a time string ("HH:MM") into the total number of minutes past midnight.
     * 
     * @param {string} time - A time string in "HH:MM" format.
     * @returns {number} - The number of minutes from midnight.
     */
    function timeToMinutes(time:string) {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    }

    // Convert hour to minutes
    const currentMinutes = timeToMinutes(currentTime);
    const sunriseMinutes = timeToMinutes(sunriseTime);
    const sunsetMinutes = timeToMinutes(sunsetTime);

    // Determines if the current time is between the sunrise and the sunset.
    return currentMinutes >= sunriseMinutes && currentMinutes <= sunsetMinutes;
}

/**
 * Fetches the current astronomical data and determines if it is day or night.
 * 
 * @async
 * @function
 * @returns {Promise<boolean | undefined>} - `true` if it's daytime, `false` if it's nighttime, or `undefined` if an error occurs.
 */
export const fetchIsDay = async ():Promise<boolean | undefined> => {
    const API_KEY = '4bc62677b1ac4ad88d165f700fbbfb57';
    try {
        const response = await fetch(`https://api.ipgeolocation.io/astronomy?apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();

        let isDay:boolean = isDaytime(data.current_time,data.sunrise,data.sunset)

        return(isDay);
    } catch (err) {
        console.log(err)
    }
}