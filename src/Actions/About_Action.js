export const initializeAbout = (data = '') => {
  return {
    type: "INITIALIZE_ABOUT",
    data
  };
};

export const fetchAbout = () => {
  return dispatch => {
    fetch('http://dfapi.dfentertainment.com/api/public/api/quienes/texto')
    .then(response => response.json())
    .then(data => dispatch(initializeAbout(data)))
  }
};
