var obj = [
    {
        image : "baby jacket.webp",
        prize : "1000",
        description : "Baby jacket soft wollen",
    },

    {
        image : "micky.webp",
        prize : "2000",
        description : "Baby winter dress soft wollen",


    },
    {
        image : "minnie.webp",
        prize : "2500",
        description : "winter dress soft wollen",

    },
    {
        image : "mnb.jpg",
        prize : "1000",
        description : "2 years baby dress soft wollen",

    },
    {
        image : "winter.jpg",
        prize : "900",
        description : "mickey dress for baby  soft wollen",

    },



]

for (var i =0; i <= obj.length; i++ ){
    var image = obj[i].image;
    var prize = obj[i].prize;
    var  description = obj[i].description;


    var card = document.getElementById("container")

    card.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${prize}</h5>
      <p class="card-text">${description}</p>
      <a href="#" class="btn btn-dark">Add to cart <i class="fa-solid fa-cart-shopping"></i></a>
    </div>
  </div>`

}