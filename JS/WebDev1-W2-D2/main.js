const listElement = document.querySelector(".posts");
const postTemplate = document.querySelector("#single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  // with XHR
  //   const promise = new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.open(method, url);
  //     xhr.onload = function () {
  //       if (xhr.status >= 200 && xhr.status < 300) {
  //         resolve(xhr.response);
  //       } else {
  //         reject(new Error("Something went wrong.... :<"));
  //       }
  //     };
  //     xhr.send();
  //   });
  //   return promise;

  //with fetch function
  //   return fetch(url).then((data) => data.json());

  //with axios
  return axios.get(url);
}

async function fetchPosts() {
  //   const responseData = sendHttpRequest(
  //       "GET",
  //       "https://jsonplaceholder.typicode.com/posts"
  //   ).then(data => {
  //       return JSON.parse(data)
  //   }).then(parsedData => {
  //       for(const post of parsedData){
  //         const postElClone = document.importNode(postTemplate.content, true)
  //         postElClone.querySelector('h2').textContent = post.title.toUpperCase()
  //         postElClone.querySelector('p').textContent = post.body
  //         postElClone.querySelector('li').id = post.id
  //         listElement.appendChild(postElClone)
  //       }
  //   }).catch(err => {
  //     console.error('Error Message => ', err)
  //   })

  const responseData = sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  )
    .then(({ data }) => {
      for (const post of data) {
        const postElClone = document.importNode(postTemplate.content, true);
        postElClone.querySelector("h2").textContent = post.title.toUpperCase();
        postElClone.querySelector("p").textContent = post.body;
        postElClone.querySelector("li").id = post.id;
        
        //宿題🐶
        postElClone.querySelector("button").addEventListener("click", {id: post.id, handleEvent: deleteData})
        
        listElement.appendChild(postElClone);
      }
    })
    .catch((err) => {
      console.error("Error Message => ", err);
    });
}

//READ
fetchButton.addEventListener("click", fetchPosts);


//Delete 宿題🐶
function deleteData(id){
  document.getElementById(this.id).remove()
}