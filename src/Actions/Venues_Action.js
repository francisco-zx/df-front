export const initializeVenues = (data = []) => {
  return {
    type: "INITIALIZE_VENUES",
    data
  };
};

export const setSelectedVenue = (item = {}) => {
  return {
    type: "SET_SELECTED_VENUE",
    item
  };
};

export const fetchAndSetSelectedVenue = (item = {}) => {
  return {
    type: "FETCH_SELECTED_VENUE",
    item
  };
};

export const fetchVenues = () => {
  return dispatch => {
    fetch('http://dfapi.dfentertainment.com/api/public/api/venues/all')
    .then(response => response.json())
    .then(data => {
      dispatch(initializeVenues(data))
    })
  };
};

export const selectVenue = (item) => {
  return dispatch =>{
    dispatch(setSelectedVenue(item))
  }
}

export const fetchSelectedVenue = (slug) => {
  return dispatch => {
    fetch(`http://dfapi.dfentertainment.com/api/public/api/venues/slug/${slug}`)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchAndSetSelectedVenue(data[0]))
    })
  };
};
