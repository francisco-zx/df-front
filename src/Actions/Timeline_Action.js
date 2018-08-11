export const initializeTimeline = (data = []) => {
  return {
    type: "INITIALIZE_TIMELINE",
    data
  };
};

export const fetchTimeline = () => {
  return dispatch => {
    fetch('http://dfapi.dfentertainment.com/api/public/api/timeline/all')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch(initializeTimeline(data))
    })
  };
};

export const fetchAndSetSelectedTimeline = (data = {}) => {
  return {
    type: "FETCH_SELECTED_TIMELINE",
    data
  };
};

export const fetchSelectedTimeline = (slug) => {
  return dispatch => {
    fetch(`http://dfapi.dfentertainment.com/api/public/api/timeline/slug/${slug}`)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchAndSetSelectedTimeline(data[0]))
    })
  };
};
