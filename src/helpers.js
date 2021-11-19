// convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

// convert a number to money formatting
export const convertCurrency = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

// gets storage session state
export const isPersistedState = stateName => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState ? JSON.parse(sessionState) : null;
};