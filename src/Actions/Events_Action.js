export const initializeEvents = (data = []) => {
  return {
    type: "INITIALIZE_EVENTS",
    data
  };
};

export const setSelectedEvent = (data = {}) => {
  return {
    type: "SET_SELECTED_EVENT",
    data
  };
};

export const selectEvent = (data) => {
  return dispatch =>{
    dispatch(setSelectedEvent(data))
  }
}


export const fetchEvents = () => {
  return dispatch => {
    fetch('http://dfapi.dfentertainment.com/api/public/api/eventos/all')
    .then(response => response.json())
    .then(data => {
      dispatch(initializeEvents(data))
    })
  };
};

export const fetchAndSetSelectedEvent = (data = {}) => {
  return {
    type: "FETCH_SELECTED_EVENT",
    data
  };
};

export const fetchSelectedEvent = (slug) => {
  return dispatch => {
    fetch(`http://dfapi.dfentertainment.com/api/public/api/eventos/slug/${slug}`)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchAndSetSelectedEvent(data[0]))
    })
  };
};
