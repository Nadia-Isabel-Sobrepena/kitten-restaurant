const menuData = [
    {
        id: 1,
        title: "Pain de Meow",
        category: "bakery",
        price: "€14.00",
        // Old: Rustic sourdough...
        // New: Aloof personality.
        desc: "Stoic. Emotionally unavailable. Fermented in isolation for 48 hours to develop a complex superiority complex. Best paired with silence and rejection.",
        img: "https://i.pinimg.com/736x/5b/69/76/5b69764c6ca602cded2a10ba9f0db2f3.jpg" 
    },
    {
        id: 2,
        title: "Sashimi Neko",
        category: "mains",
        price: "€22.00",
        // Old: Fresh salmon...
        // New: Lazy/Liquid personality.
        desc: "Extremely lethargic. This salmon has given up on life and accepted its fate as rice. It enjoys sunbeams, doing absolutely nothing, and judging your chopstick technique.",
        img: "https://www.designboom.com/twitterimages/uploads/2014/06/sushi-cats-tange-nakimushi-peanuts-designboom-12.jpg"
    },
    {
        id: 3,
        title: "The Purr-ger",
        category: "mains",
        price: "€18.50",
        // Old: Wagyu patty...
        // New: Chaotic/Hungry personality.
        desc: "A chaotic energy. Heavily motivated by treats. The wagyu patty creates a gravitational pull of neediness. Will knock your drink over if ignored for more than 3 seconds.",
        img: "https://i.pinimg.com/736x/7e/9b/81/7e9b81180613a52a4b41c3a4e709cc88.jpg"
    },
    {
        id: 4,
        title: "Crosso-cat",
        category: "bakery",
        price: "€8.00",
        // Old: Laminated dough...
        // New: Sensitive/Fragile personality.
        desc: "Flaky and sensitive. Requires constant verbal validation or it will crumble. The butter layers represent its many walls against intimacy. Handle with extreme empathy.",
        img: "https://i.pinimg.com/736x/4b/e0/28/4be028b7f9f207bbb5ebee7e68a023e6.jpg"
    },
    {
        id: 5,
        title: "Berry Tart Whiskers",
        category: "sweets",
        price: "€12.00",
        // Old: Custard tart...
        // New: Confused/Orange Cat Energy.
        desc: "Deeply confused by its own existence. It does not know why it is a tart. It does not know why it is sweet. It has one brain cell, and it is currently buffering.",
        img: "https://i.pinimg.com/1200x/bb/33/c8/bb33c8fb5270d8076f09662a3ce5ef79.jpg"
    },
    {
        id: 6,
        title: "The Great Purrito",
        category: "mains",
        price: "€19.50",
        // Old: Ramen/Introverted...
        // New: Repressed/Defensive personality.
        desc: "Tightly swaddled. Emotionally repressed. This dish has built a thick flour tortilla wall around its heart to avoid vulnerability. It is spicy, defensive, and will bite if unwrapped.",
        img: "https://i.pinimg.com/1200x/71/b2/bb/71b2bb13f4948f314cc05f15e759df46.jpg"
    },
   {
        id: 7,
        title: "Scoop of Indifference",
        category: "sweets",
        price: "€14.50",
        // Old: Meow Cream...
        // New: A normal vanilla scoop that ignores you.
        desc: "A classic vanilla bean sphere that simply does not care. You can call its name, wave toys at it, or plead for attention—it remains unmoved. It is the culinary equivalent of being left on 'read'.",
        img: "https://i.pinimg.com/736x/91/59/6c/91596c995dfd2b7dc660ca54cf512087.jpg"
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