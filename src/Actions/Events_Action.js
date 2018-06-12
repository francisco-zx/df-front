export const initializeEvents = (data = []) => {
  return {
    type: "INITIALIZE_EVENTS",
    data
  };
};

export const fetchEvents = () => {
  return dispatch => {
    fetch('https://dfapi.dlmr.co/api/eventos/all')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch(initializeEvents(data))
    })
  };
};
