export const REQUEST_NEWS = 'REQUEST_NEWS';
export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export const FAILURE_RECEIEV_NEWS = 'FAILURE_RECEIEV_NEWS';
  
const requestNews = (isFetching) => ({
  type: REQUEST_NEWS, 
  isFetching
})

const receiveNews = (news, isFetching) => ({
  type: RECEIVE_NEWS,
  news,
  isFetching
})

export const failureReceiveNews = (errorMessage, isFetching) => ({
  type: FAILURE_RECEIEV_NEWS,
  errorMessage,
  isFetching
})

export const fetchNews = () => async (dispatch) => {
  dispatch(requestNews())
  await fetch("http://api.bulletodds.com/news")
    .then(response => {
      if (response.ok) {
        return response.json();
        } else {
          throw new Error("damn :(");
        }
      })
    .then(news => dispatch(receiveNews(news)))
    .catch(error => dispatch(failureReceiveNews(error)));
};



