// middlewares/workingHours.js

const workingHours = (req, res, next) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
  
    // Check if the current day is Monday to Friday and time is between 9 AM to 5 PM
    const isWeekday = currentDay >= 1 && currentDay <= 5;
    const isWorkingHour = currentHour >= 9 && currentHour < 17;
  
    if (isWeekday && isWorkingHour) {
      next(); // Allow access
    } else {
      res.status(403).send('The website is only available from Monday to Friday, 9 AM to 5 PM.');
    }
  };
  
  module.exports = workingHours;
  