const initialState = {
  blog: [],
  events: [],
  venues: [],
  topBar: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_BLOG":
      return {...state, blog: action.data};
    case "INITIALIZE_EVENTS":
      return {...state, events: action.data};
    case "INITIALIZE_VENUES":
      return {...state, venues: action.data};
    case "INITIALIZE_TOP_BAR":
      return {...state, topBar: action.data};
    default:
      return {
        ...state
      };
  }
};
