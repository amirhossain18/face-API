function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data=>  displayPost(data))
}

function displayPost(posts){
    const postContainer = document.getElementById('list-container')
    for (const post of posts){
        console.log(post)
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        
        <h4> User ${post.id}</h4>
        <h5>title: ${post.title}</h5> </h5>
        <h6>Post discription : ${post.body}</h>h6>
      
        
        `
        postContainer.appendChild(postDiv)

    }
  
   
}