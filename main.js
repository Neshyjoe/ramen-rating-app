document.addEventListener('DOMContentLoaded', main);

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];

function main() {
    displayRamens();
    addSubmitListener();
}

function displayRamens() {
    const menu = document.getElementById('ramen-menu');
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.dataset.id = ramen.id;
        img.addEventListener('click', () => handleClick(ramen));
        menu.appendChild(img);
    });
}

function handleClick(ramen) {
    const detailSection = document.getElementById('ramen-detail');
    detailSection.querySelector('.detail-image').src = ramen.image;
    detailSection.querySelector('.name').textContent = ramen.name;
    detailSection.querySelector('.restaurant').textContent = ramen.restaurant;
    detailSection.querySelector('.rating').textContent = `Rating: ${ramen.rating || 'N/A'}/10`;
    detailSection.querySelector('.comment').textContent = ramen.comment || 'No comment provided';
}

function addSubmitListener() {
    document.getElementById('new-ramen-form').addEventListener('submit', e => {
        e.preventDefault();
        
        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById('name').value,
            restaurant: document.getElementById('restaurant').value,
            image: document.getElementById('image').value,
            rating: document.getElementById('rating').value,
            comment: document.getElementById('comment').value
        };

        // Add to ramen menu
        const menu = document.getElementById('ramen-menu');
        const img = document.createElement('img');
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.dataset.id = newRamen.id;
        img.addEventListener('click', () => handleClick(newRamen));
        menu.appendChild(img);

        // Reset form
        e.target.reset();
    });
}