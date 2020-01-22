import {
  initTypes,
  likeTypes,
  deleteTypes,
  screamTypes,
  fetchScreamTypes,
  postCommentTypes
} from "../types";
const INITIAL_STATE = {
  error: null,
  screams: [],
  loading: false,
  currentScream: {
    loading: true,
    scream: null
  }
};
const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case initTypes.APP_INIT_DATA_FETCH_STARTED:
      return {
        ...state,
        loading: true
      };
    case initTypes.APP_INIT_DATA_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        screams: [...action.payload]
      };
    case initTypes.APP_INIT_DATA_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        screams: [],
        error: { ...action.payload }
      };
    case likeTypes.LIKE_SCREAM:
    case likeTypes.UNLIKE_SCREAM:
      return {
        ...state,
        screams: state.screams.map(scream =>
          scream.screamId !== action.payload.screamId ? scream : action.payload
        )
      };
    case deleteTypes.SCREAM_DELETE_STARTED:
    case screamTypes.SCREAM_ADD_STARTED:
      return {
        ...state,
        error: null,
        loading: true
      };
    case deleteTypes.SCREAM_DELETE_SUCCESS:
      let index = state.screams.findIndex(i => i.screamId === action.payload);
      state.screams.splice(index, 1);
      return {
        loading: false,
        error: null,
        screams: [...state.screams]
      };
    case deleteTypes.SCREAM_DELETE_FAILED:
    case screamTypes.SCREAM_ADD_FAILED:
      return {
        ...state,
        loading: false,
        error: "Error add/delete"
      };
    case screamTypes.SCREAM_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        screams: [...state.screams, { ...action.payload }]
      };
    case fetchScreamTypes.SINGLE_SCREAM_FETCH_STARTED:
    case postCommentTypes.POST_COMMENT_STARTED:
      return {
        ...state,
        currentScream: {
          ...state.currentScream,
          loading: true,
          error: null
        }
      };
    case fetchScreamTypes.SINGLE_SCREAM_FETCH_FAILED:
    case postCommentTypes.POST_COMMENT_FAILED:
      return {
        ...state,
        currentScream: {
          ...state.currentScream,
          loading: false,
          error: action.payload
        }
      };
    case fetchScreamTypes.SINGLE_SCREAM_FETCH_SUCCEED:
      return {
        ...state,
        currentScream: {
          loading: false,
          error: null,
          scream: action.payload
        }
      };
    case postCommentTypes.POST_COMMENT_SUCCESS:
      return {
        ...state,
        currentScream: {
          ...state.currentScream,
          scream: {
            ...state.currentScream.scream,
            comments: [
              ...state.currentScream.scream.comments,
              { ...action.payload }
            ]
          },
          loading: false,
          error: null
        }
      };
    default:
      return state;
  }
};
export default dataReducer;
