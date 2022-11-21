export const getPost = async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return await response.json();
}

export const getComments = async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    return await response.json();
}

export const getProfile = async (authorId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
    return await response.json();
}