export const initializeBlog = (data = []) => {
  return {
    type: "INITIALIZE_BLOG",
    data
  };
};

export const setSelectedBlog = (item = {}) => {
  return {
    type: "SET_SELECTED_BLOG",
    item
  };
};

export const fetchAndSetSelectedBlog = (item = {}) => {
  return {
    type: "FETCH_SELECTED_BLOG",
    item
  };
};

export const fetchBlog = () => {
  return dispatch => {
    fetch('http://dfapi.dfentertainment.com/api/public/api/blog/all')
    .then(response => response.json())
    .then(data => {
      dispatch(initializeBlog(data))
    })
  };
};

export const selectBlog = (item) => {
  return dispatch =>{
    dispatch(setSelectedBlog(item))
  }
}

export const fetchSelectedBlog = (slug) => {
  return dispatch => {
    fetch(`http://dfapi.dfentertainment.com/api/public/api/blog/slug/${slug}`)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchAndSetSelectedBlog(data[0]))
    })
  };
};
