const initialState = {
  blog: [],
  selectedBlog: {},
  events: [],
  venues: [],
  selectedVenue: {},
  timeline: [],
  topBar: [],
  search: {
    events: [],
    blog: [],
    timeLine: []
  },
  showEventsSlider: false,
  showVenuesSlider: false,
  showBlogsSlider: false
}
export default (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_ABOUT":
      return {...state, about: action.data};
    case "INITIALIZE_BLOG":
      return {...state, blog: action.data.items, showBlogsSlider: action.data.mostrarSlider };
      //return {...state, blog: action.data};
    case "SET_SELECTED_BLOG":
      return {...state, selectedBlog: action.item};
    case "FETCH_SELECTED_BLOG":
      return {...state, selectedBlog: action.item};
    case "INITIALIZE_EVENTS":
      return {...state, events: action.data.items, showEventsSlider: action.data.mostrarSlider };
    case "SET_SELECTED_EVENT":
      return {...state, selectedBlog: action.data};
    case "FETCH_SELECTED_EVENT":
      return {...state, selectedEvent: action.data};
    case "INITIALIZE_VENUES":
      return {...state, venues: action.data.items, showVenuesSlider: action.data.mostrarSlider};
    case "SET_SELECTED_VENUE":
      return {...state, selectedVenue: action.item};
    case "FETCH_SELECTED_VENUE":
      return {...state, selectedVenue: action.item};
    case "INITIALIZE_TIMELINE":
      return {...state, timeline: action.data};
    case "FETCH_SELECTED_TIMELINE":
      return {...state, selectedTimeline: action.data};
    case "INITIALIZE_TOP_BAR":
      return {...state, topBar: action.data};
    case "SEARCH":
      return {
        ...state,
        search: {
          events: state.events.filter((event) => {return event.nombre.toLowerCase().includes(action.terms.toLowerCase()) }),
          blog: state.blog.filter((blog) => {return blog.nombre.toLowerCase().includes(action.terms.toLowerCase())}),          
          timeLine: state.timeline.filter((timeLine) => {return timeLine.nombre.toLowerCase().includes(action.terms.toLowerCase())
          })
        }
      };
    default:
      return {
        ...state
      };
  }
};
