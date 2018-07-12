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
    fetch('https://dfapi.dlmr.co/api/blog/all')
    .then(response => response.json())
    .then(data => {
      dispatch(initializeBlog(data))
    })
  };
};

export const selectBlog = (item) => {
  return dispatch =>{
    console.log(item)
    dispatch(setSelectedBlog(item))
  }
}

export const fetchSelectedBlog = (slug) => {
  return dispatch => {
    fetch(`https://dfapi.dlmr.co/api/blog/slug/${slug}`)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchAndSetSelectedBlog(data[0]))
    })
  };
};
