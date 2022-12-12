export async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!response.ok) throw new Response('Failed to fetch posts', {status: 500 })
  return response.json();
}

export const getPost = async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    if(!response.ok) throw new Response(`Failed to fetch post with id: ${postId}`, { status: 500 })
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

export const savePost = async (data) => {
    const post = {
        title: data.get('title'),
        body: data.get('post-text'),
    }

    if(post.title.trim().length < 5 || post.body.trim().length < 10){
        return { 
            isError: true, 
            message: 'Title must be at least 5 characters long and body must be at least 10 characters long'
        }
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json;',
        },
    })

    if(!response.ok){
        throw response;
    }
}