import { 
  REQUEST_NEWS,
  RECEIVE_NEWS,
  FAILURE_RECEIEV_NEWS
} from '../actions'

const initialState = {
  news: [],
  isFetching: false,
  errorMessage: ""
}

export const getNews = (state = initialState, action) => {
  switch(action.type){
    case REQUEST_NEWS: {
      return {
        ...state, 
        isFetching: true
      }
    }
    case RECEIVE_NEWS: {
      return {
        ...state, 
        news: action.news, 
        isFetching: false
      }
    }
    case FAILURE_RECEIEV_NEWS: {
      return {
        ...state, 
        isFetching: false,
        errorMessage: action.errorMessage
      }
    }
    default:
      return state
  }
}