function displayRessources(){
    const allArticles = JSON.parse(localStorage.getItem("ressources"));
    const divArticles = document.getElementById("articles");

    divArticles.innerHTML = "";

    allArticles.forEach(item => {
        const newDiv = document.createElement("div");
        newDiv.className = "ressource-item";
        
        newDiv.innerHTML = `<h3>${item.title}</h3>`;
        
        divArticles.appendChild(newDiv);
    });
}

displayRessources();