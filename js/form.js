const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const newRessources = {
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        description: document.getElementById('description').value,
        author: document.getElementById('author').value,
        date: document.getElementById('date').value
    };

    localStorage.setItem('ressources', JSON.stringify(newRessources));

    console.log("envrai c ok ")
});