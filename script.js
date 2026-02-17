const menuData = [
    {
        id: 1,
        title: "Pain de Meow",
        category: "bakery",
        price: "€14.00",
        desc: "A rustic, slow-fermented sourdough loaf. Features pointed ears, a golden crust, and a judgmental expression. Served warm with butter.",
        // REPLACE THIS URL with your image: "images/cat-loaf.jpg"
        img: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&w=600&q=80" 
    },
    {
        id: 2,
        title: "Sashimi Neko",
        category: "mains",
        price: "€22.00",
        desc: "Fresh Atlantic salmon resting atop a bed of sushi rice, sculpted into a resting feline form. Too adorable to dip in soy sauce.",
        // REPLACE THIS URL with your image: "images/cat-sushi.jpg"
        img: "https://images.unsplash.com/photo-1517331156700-6c2468ec5268?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "The Purr-ger",
        category: "mains",
        price: "€18.50",
        desc: "A wagyu beef patty nestled between two brioche buns that look suspiciously like a tabby cat. Comes with a side of yarn fries.",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Crosso-cat",
        category: "bakery",
        price: "€8.00",
        desc: "French laminated dough, buttery and flaky, curled into a sleeping kitten position. Requires 3 days of naps to prepare.",
        img: "https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        title: "Berry Tart Whiskers",
        category: "sweets",
        price: "€12.00",
        desc: "A custard tart topped with seasonal berries arranged to resemble a surprised face. Sweet, tart, and deeply confused.",
        img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "Ramen Bath",
        category: "mains",
        price: "€24.00",
        desc: "Tonkotsu broth with noodles and a soft-boiled egg, featuring a cat made of tofu soaking in the soup like a hot spring.",
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        title: "Banana Cat Split",
        category: "sweets",
        price: "€15.00",
        desc: "The famous crying banana cat, but as a dessert. Caramelized banana, vanilla bean ice cream, and tears of chocolate syrup.",
        img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        title: "Matcha Kitten Latte",
        category: "sweets",
        price: "€7.50",
        desc: "Ceremonial grade matcha with 3D foam art of a kitten reaching for the rim of the cup. Almost impossible to drink without guilt.",
        img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
    }
];

// --- RENDER FUNCTION (Same as before) ---
const menuGrid = document.getElementById('menu-grid');
const btns = document.querySelectorAll('.filter-btn');

function renderMenu(category) {
    menuGrid.innerHTML = '';
    const items = category === 'all' ? menuData : menuData.filter(item => item.category === category);
    
    items.forEach(item => {
        const card = `
            <article class="menu-item">
                <div class="item-img-container">
                    <img src="${item.img}" alt="${item.title}" class="item-img">
                </div>
                <div class="item-details">
                    <h3 class="item-title">${item.title}</h3>
                    <span class="item-price">${item.price}</span>
                    <p class="item-desc">${item.desc}</p>
                </div>
            </article>
        `;
        menuGrid.innerHTML += card;
    });
}

// --- FILTERING ---
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderMenu(e.target.dataset.category);
    });
});

renderMenu('all');