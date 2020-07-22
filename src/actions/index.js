import axiosBaseUrl from '../api/apiBaseUrl';

export const fetchPosts = async () => {
    const response = await axiosBaseUrl.get('/posts');
    return {
        type: 'FETCH_POSTS',
        payload: response
    }
};
