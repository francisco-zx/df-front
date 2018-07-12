const initialState = {
  blog: [],
  selectedBlog: {},
  events: [],
  venues: [],
  selectedVenue: {},
  topBar: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_BLOG":
      return {...state, blog: action.data};
    case "SET_SELECTED_BLOG":
      return {...state, selectedBlog: action.item};
    case "FETCH_SELECTED_BLOG":
      return {...state, selectedBlog: action.item};
    case "INITIALIZE_EVENTS":
      return {...state, events: action.data};
    case "INITIALIZE_VENUES":
      return {...state, venues: action.data};
    case "SET_SELECTED_VENUE":
      return {...state, selectedVenue: action.item};
    case "FETCH_SELECTED_VENUE":
      return {...state, selectedVenue: action.item};
    case "INITIALIZE_TOP_BAR":
      return {...state, topBar: action.data};
    default:
      return {
        ...state
      };
  }
};
