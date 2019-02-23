import { BLOGS, BLOGS_DETAIL } from "reactism/types";

const initialState = {
  blogs: [],
  detail:[]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case BLOGS:
      return {
        ...state,
        blogs: action.response
      }
    case BLOGS_DETAIL:
      return {
        ...state,
        detail: action.response
      }
    default:
      return state
  }
}

export default rootReducer;
