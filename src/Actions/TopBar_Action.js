export const initializeTopBar = (data = []) => {
  return {
    type: "INITIALIZE_TOP_BAR",
    data
  };
};

export const fetchTopBar = () => {
  return dispatch => {
    fetch('http://dfapi.dfentertainment.com/api/public/api/eventos/header')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch(initializeTopBar(data))
    })
  };
};
