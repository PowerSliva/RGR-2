function func(){
    (async () => {
      let url = 'https://jsonplaceholder.typicode.com/posts'; 
        let response = await fetch(url);
          let posts = await response.json();
let i = 0
while(i<10){
  let div = document.createElement('div');
      div.className = "spisok";
      div.innerHTML =(`<strong>Страница: </strong>${posts[i].title}` +`<br/><strong>id страницы: </strong>${posts[i].id}`+ `<br/><strong>Тело страницы: </strong>${posts[i].body}`);
      one.append(div);
i++
}
})()
}
