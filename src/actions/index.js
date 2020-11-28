import { map, uniq } from "lodash";
import jsonPlaceHolder from "../apis/jsonPlaceHolder"

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())

  const userIds = uniq(map(getState().posts, 'userId'));
  userIds.forEach(u => dispatch(fetchUser(u)));
};


const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};


const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
};