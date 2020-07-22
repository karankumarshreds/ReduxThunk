import axiosBaseUrl from '../api/apiBaseUrl';

export const fetchPosts = () => {

    // we can return a function and manually dispatch because 
    // we are using thunk and it will automatically call this fn()

    return async (dispatch) => {
        const response = await axiosBaseUrl.get('/posts');
        dispatch({ type: 'FETCH_POSTS', payload: response });
    };
};
