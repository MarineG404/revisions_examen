async function loadRessources(){

    let localStorageData = localStorage.getItem("ressources");

    if (!localStorageData){
        try {
            const apiResponse = await fetch('./data/data.json');
           
            if (!apiResponse.ok) {
                if (apiResponse.status === 404) {
                    throw new Error("Erreur 404 : Le fichier JSON est introuvable.");
                } else if (apiResponse.status === 500) {
                    throw new Error("Erreur 500 : Le serveur a un problème technique.");
                } else {
                    throw new Error("Erreur HTTP : " + apiResponse.status);
                }
            };

            const dataAPI = await apiResponse.json();
            console.log("Données chargées :", dataAPI);

            localStorage.setItem("ressources", JSON.stringify(dataAPI));

        } catch (error) {
            console.error("Erreur capturée :", error.message);   
        }
    }
    
    displayRessources();
}

function displayRessources(){
    const allArticles = JSON.parse(localStorage.getItem("ressources"));
    const divArticles = document.getElementById("ressources");

    if (!allArticles) return;
    divArticles.innerHTML = "";

    allArticles.forEach(item => {
        const newDiv = document.createElement("div");
        newDiv.className = "ressource-item";
        
        newDiv.innerHTML = `
            <div class="card-header">
                <h3 class="res-title">${item.title}</h3>
                <span class="category-badge">${item.category}</span>
            </div>
            <div class="card-body">
                <p class="res-description">${item.description}</p>
            </div>
            <div class="card-footer">
                <span class="res-author">Par ${item.author}</span>
                <span class="res-date">${item.date}</span>
            </div>
        `;
        
        divArticles.appendChild(newDiv);
    });
}

loadRessources();