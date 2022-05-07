const getFormattedDateTime = (dateTime, extra) => {
  const dt = new Date(dateTime);
  // Extract Date and Time
  const date = `${dt.getFullYear()}/${dt.getMonth() + 1}/${dt.getDate()}`;
  const time = `${dt.getHours()}:${dt.getMinutes()}`;

  // If time is also requested, send date and time
  if (extra == "time") return `${date} - ${time}`;
  // Otherwise, only send date
  return date;
};

export default getFormattedDateTime;
