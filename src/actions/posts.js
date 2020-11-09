import * as api from '../api'
import {FETCH_ALL,UPDATE,DELETE,CREATE} from './actionTypes'
//Action creators using redux thunk
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        let action = { type: FETCH_ALL, payload: data }
        return dispatch(action);
    } catch (err) {
        console.log(err)

    }

}
export const createPost = (payload) => async (dispatch) => {
    try {
        const { data } = await api.createPost(payload)
        let action = { type: CREATE, payload: data }
        dispatch(action)
    } catch (err) {
        console.error(err.message)
    }

}
export const updatePost = (id, payload) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, payload)
        let action = { type: UPDATE, payload: data }
        dispatch(action)
    }
    catch (err) {
        console.log(err)
    }
}
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        let action = { type: DELETE, payload: id }
        dispatch(action)
    }
    catch (err) {
        console.log(err)
    }

}
export const likePost = (id) => async (dispatch) => {
    try {

        const { data } = await api.likePost(id)
        let action = { type: UPDATE, payload: data }
        dispatch(action)
    }
    catch (err) {
        console.log(err)
    }

}