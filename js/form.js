const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const local_ressources = localStorage.getItem('ressources');

    let allRessources = [];
    if (storlocal_ressourcesed) {
        try {
            const parsed = JSON.parse(local_ressources);
            if (Array.isArray(parsed)) allRessources = parsed;
            else if (parsed) allRessources = [parsed];
        } catch (err) {
            console.warn('Could not parse stored ressources, resetting to empty array.', err);
            allRessources = [];
        }
    }

    const newRessources = {
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        description: document.getElementById('description').value,
        author: document.getElementById('author').value,
        date: document.getElementById('date').value
    };

    allRessources.push(newRessources);

    localStorage.setItem('ressources', JSON.stringify(allRessources));
    console.log('envoi ok', allRessources);

    form.reset();
});