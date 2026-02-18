const menuData = [
    {
        id: 1,
        title: "Pain de Meow",
        category: "bakery",
        price: "€14.00",
        // Old: Rustic sourdough...
        // New: Aloof personality.
        desc: "Stoic. Emotionally unavailable. Fermented in isolation for 48 hours to develop a complex superiority complex. Best paired with silence and rejection.",
        img: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&w=600&q=80" 
    },
    {
        id: 2,
        title: "Sashimi Neko",
        category: "mains",
        price: "€22.00",
        // Old: Fresh salmon...
        // New: Lazy/Liquid personality.
        desc: "Extremely lethargic. This salmon has given up on life and accepted its fate as rice. It enjoys sunbeams, doing absolutely nothing, and judging your chopstick technique.",
        img: "https://images.unsplash.com/photo-1517331156700-6c2468ec5268?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "The Purr-ger",
        category: "mains",
        price: "€18.50",
        // Old: Wagyu patty...
        // New: Chaotic/Hungry personality.
        desc: "A chaotic energy. Heavily motivated by treats. The wagyu patty creates a gravitational pull of neediness. Will knock your drink over if ignored for more than 3 seconds.",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Crosso-cat",
        category: "bakery",
        price: "€8.00",
        // Old: Laminated dough...
        // New: Sensitive/Fragile personality.
        desc: "Flaky and sensitive. Requires constant verbal validation or it will crumble. The butter layers represent its many walls against intimacy. Handle with extreme empathy.",
        img: "https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        title: "Berry Tart Whiskers",
        category: "sweets",
        price: "€12.00",
        // Old: Custard tart...
        // New: Confused/Orange Cat Energy.
        desc: "Deeply confused by its own existence. It does not know why it is a tart. It does not know why it is sweet. It has one brain cell, and it is currently buffering.",
        img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "Ramen Bath",
        category: "mains",
        price: "€24.00",
        // Old: Tonkotsu broth...
        // New: Introverted/Cozy.
        desc: "Immersed in a hot broth of comfort, yet retaining a core of tofu-based indifference. It refuses to leave the bowl. Do not make eye contact.",
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        title: "Banana Cat Split",
        category: "sweets",
        price: "€15.00",
        // Old: Caramelized banana...
        // New: Melodramatic/Sad.
        desc: "Melancholy. Tragic. The caramelized banana is weeping chocolate tears over a past life it cannot remember. Tastes like nostalgia and poor attachment styles.",
        img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        title: "Matcha Kitten Latte",
        category: "sweets",
        price: "€7.50",
        // Old: Ceremonial grade...
        // New: Hyperactive/Zoomies.
        desc: "A 3D foam construct with too much energy. It vibrates with caffeine and unchecked aggression. It is planning to attack your upper lip. Proceed with caution.",
        img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
    }
];

// --- RENDER FUNCTION ---
const menuGrid = document.getElementById('menu-grid');
const btns = document.querySelectorAll('.filter-btn');

function renderMenu(category) {
    menuGrid.innerHTML = '';
    const items = category === 'all' ? menuData : menuData.filter(item => item.category === category);
    
    items.forEach(item => {
        // We match the CSS classes perfectly here
        const card = `
            <article class="menu-item">
                <div class="img-wrapper">
                    <img src="${item.img}" alt="${item.title}" class="item-img">
                </div>
                
                <div class="item-meta">
                    <span class="item-title">${item.title}</span>
                    <span class="item-price">${item.price}</span>
                </div>
                
                <p class="item-desc">${item.desc}</p>
            </article>
        `;
        menuGrid.innerHTML += card;
    });
}

// --- FILTER BUTTON LISTENERS ---
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderMenu(e.target.dataset.category);
    });
});

// Initial Render
renderMenu('all');