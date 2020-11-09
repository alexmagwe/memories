import axios from 'axios'
const postsUrl='/posts'
export const fetchPosts = () => axios.get(postsUrl)
export const createPost = (newPost) => axios.post(postsUrl, newPost)
export const updatePost=(id,data)=>axios.patch(`${postsUrl}/${id}`,data)
export const deletePost=id=>axios.delete(`${postsUrl}/${id}`)
export const likePost=id=>axios.patch(`${postsUrl}/${id}/like`)
