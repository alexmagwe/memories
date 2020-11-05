import * as api from '../api'

//Action creators using redux thunk
export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        let action = { type: 'FETCH_POSTS', payload: data }
        return dispatch(action);
    } catch (err) {
        console.log(err)

    }

}
export const createPost = (payload) => async(dispatch) => {
    try {
        const { data } = await api.createPost(payload)
        let action = { type: 'CREATE', payload: data }
        dispatch(action)
    } catch (err) {
        console.error(err.message)
    }

}