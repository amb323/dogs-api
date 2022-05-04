fetch('https://dog.ceo/api/breeds/image/random')

.then(response => response.json())
.then(data => {

  document.getElementById("perritos").innerHTML = `
  
    
    <h1 class="title">Perritos!!!</h1>
    <div class="card">
    <img class="image" src="${data.message}">
    </div>
    `

})
