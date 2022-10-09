function btnClick(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => newfun(users))

}

//   const user= {id:1, name: 'John', email: 'mair@gmail', address:'feni'}
//   const stringified= JSON.stringify(user);
//   const object= JSON.parse(stringified);
//   console.log(user)
//   console.log(stringified)
//   console.log(object)

function newfun(users){
   

    const ul =document.getElementById('user-list');
   for (const user of users) {
   
    const li = document.createElement('li');
    li.innerText= user.name;
    ul.appendChild(li);
   }
  
}