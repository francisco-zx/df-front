export const initializeBlog = (data = []) => {
  return {
    type: "INITIALIZE_BLOG",
    data
  };
};

export const fetchBlog = () => {
  return dispatch => {
    fetch('https://dfapi.dlmr.co/api/blog/all')
    .then(response => response.json())
    .then(data => {
      dispatch(initializeBlog(data))
    })
  };
};
