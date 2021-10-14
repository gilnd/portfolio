import colors from 'tailwindcss/colors'
  
/*** Date Utils ***/
/**
 * returns locale string of a given date
 * @param {*} date 
 * @returns 
 */
const getFormattedDate = (date) => {
  if(!(date instanceof Date)){
    date = new Date(date);
  }
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  return `${Math.floor(da)} ${mo}, ${ye}`; // 10 Aug, 2020
}


/*** Theme Utils  ***/
/**
  * Returns random tailwind 100 color for badge
  * @param {*} date 
  * @returns 
  */
const getRandomTailwindColor = (sat) => {
  // filter out black and white 
  const filteredcolors = Object.keys(colors).filter(e => e != 'black' && e != 'white');
  const index = Math.floor(Math.random() * filteredcolors.length);
  return colors[filteredcolors[index]][sat] // returns the actual color
}

/*** String Utils ***/
/**
  * Given a text calculates the read time
  * @param {*} text 
  * @returns 
  */
const calcReadTime = (text) => {
  if (text){
  const wpm = 250; // words per minute
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
  } else return 1;
}

export { getFormattedDate, getRandomTailwindColor, calcReadTime }
