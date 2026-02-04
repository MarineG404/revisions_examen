function displayRessources(){
    const allArticles = JSON.parse(localStorage.getItem("ressources"))
    const divArticles = document.getElementById("articles")
    const divRessources = document.getElementById("ressources")

    allArticles.forEach(item => {
        divRessources.innerHTML = `<h3>${item.title}</h3>` ; 
        
        divArticles.appendChild(divRessources);
    });

}

displayRessources()