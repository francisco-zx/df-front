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
    fetch('https://dfapi.dlmr.co/api/venues/all')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch(initializeVenues(data))
    })
  };
};

export const selectVenue = (item) => {
  return dispatch =>{
    console.log(item)
    dispatch(setSelectedVenue(item))
  }
}

export const fetchSelectedVenue = (slug) => {
  return dispatch => {
    fetch(`https://dfapi.dlmr.co/api/venues/slug/${slug}`)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchAndSetSelectedVenue(data[0]))
    })
  };
};
