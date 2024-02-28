export const api =
  "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";

export const TABLE_HEAD = ["PATIENTS", "DATE", "TIME", "DOCTOR", "INJURY", "ACTIVE"];
  
export const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
  };

export const formatTime = (time) => {
    const [hour, minute] = time.split(/[:\s]/);
    const formattedHour = parseInt(hour, 10);
    const formattedMinute = parseInt(minute, 10);
  
    return `${formattedHour}:${formattedMinute < 10 ? `0${formattedMinute}` : formattedMinute}`;
  };
  