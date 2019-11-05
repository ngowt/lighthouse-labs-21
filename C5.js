const chooseStations = (stations) => {
  return stations
          .filter(s => s[1] >= 20 && (s[2] === 'school' || s[2] === 'community centre'))
          .map(s => s[0]);
}