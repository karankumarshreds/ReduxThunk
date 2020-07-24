import jsonPlaceholder from '../apis/jsonPlaceHolder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const posts = getState().posts;
    let users = []
    posts.map(post => {
        if (!users.includes(post.userId)) {
            users.push(post.userId)
        }
    });
    users.forEach(each => dispatch(fetchUser(each)));
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};