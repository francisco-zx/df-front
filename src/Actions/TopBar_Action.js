export const initializeTopBar = (data = []) => {
  return {
    type: "INITIALIZE_TOPBAR",
    data
  };
};

export const fetchTopBar = () => {
  return dispatch => {
    fetch('https://dfapi.dlmr.co/api/eventos/header')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch(initializeTopBar(data))
    })
  };
};
