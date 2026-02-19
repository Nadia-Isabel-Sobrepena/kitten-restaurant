const menuData = [
    // ── BREAD & PASTRY ──
    {
        id: 1,
        title: "Pain de Meow",
        category: "bakery",
        price: "€14.00",
        desc: "Stoic. Emotionally unavailable. Fermented in isolation for 48 hours to develop a complex superiority complex. Best paired with silence and rejection.",
        img: "https://i.pinimg.com/736x/dd/3b/61/dd3b617e941b8218949860ba9358602c.jpg"
    },
    {
        id: 4,
        title: "Crosso-cat",
        category: "bakery",
        price: "€8.00",
        desc: "Flaky and sensitive. Requires constant verbal validation or it will crumble. The butter layers represent its many walls against intimacy. Handle with extreme empathy.",
        img: "https://i.pinimg.com/736x/4b/e0/28/4be028b7f9f207bbb5ebee7e68a023e6.jpg"
    },
    {
        id: 9,
        title: "Brioche de Nuit",
        category: "bakery",
        price: "€11.00",
        desc: "Nocturnal. This loaf refuses to be baked before midnight and has strong opinions about window sills. Enriched with butter it will never acknowledge needing.",
        img: "https://i.pinimg.com/736x/da/fa/c3/dafac3d8016015ac12b36d85c7eb08ae.jpg"
    },

    // ── STARTERS ──
    {
        id: 10,
        title: "Amuse-Bouche Félin",
        category: "starters",
        price: "€16.00",
        desc: "Three bites. Three personalities. The first ignores you entirely, the second demands attention aggressively, and the third disappears before you've finished forming an opinion.",
        img: "https://i.pinimg.com/736x/91/59/6c/91596c995dfd2b7dc660ca54cf512087.jpg"
    },
    {
        id: 11,
        title: "Soupe du Regard",
        category: "starters",
        price: "€18.00",
        desc: "A slow-stare bisque, developed by a contributor who maintained unbroken eye contact for nine minutes during the initial assessment. Rich, unsettling, and impeccably seasoned.",
        img: "https://i.pinimg.com/736x/d6/d3/bf/d6d3bf2f6891ff80bc4d00015e8d9fc6.jpg"
    },

    // ── MAINS ──
    {
        id: 2,
        title: "Sashimi Neko",
        category: "mains",
        price: "€22.00",
        desc: "Extremely lethargic. This salmon has given up on life and accepted its fate as rice. It enjoys sunbeams, doing absolutely nothing, and judging your chopstick technique.",
        img: "https://i.pinimg.com/736x/96/8c/37/968c37306a2daa0d505e854378678f2f.jpg"
    },
    {
        id: 3,
        title: "The Purr-ger",
        category: "mains",
        price: "€18.50",
        desc: "A chaotic energy. Heavily motivated by treats. The wagyu patty creates a gravitational pull of neediness. Will knock your drink over if ignored for more than 3 seconds.",
        img: "https://i.pinimg.com/736x/7e/9b/81/7e9b81180613a52a4b41c3a4e709cc88.jpg"
    },
    {
        id: 6,
        title: "The Great Purrito",
        category: "mains",
        price: "€19.50",
        desc: "Tightly swaddled. Emotionally repressed. This dish has built a thick flour tortilla wall around its heart to avoid vulnerability. It is spicy, defensive, and will bite if unwrapped.",
        img: "https://i.pinimg.com/1200x/71/b2/bb/71b2bb13f4948f314cc05f15e759df46.jpg"
    },
    {
        id: 12,
        title: "Confit de Pattes",
        category: "mains",
        price: "€26.00",
        desc: "A slow-cooked preparation from a contributor who simply sat in the pan for forty minutes without explanation. The result is extraordinarily tender and deeply perplexing.",
        img: "https://i.pinimg.com/1200x/fd/15/f0/fd15f033242535d5bfd7edd717036499.jpg"
    },

    // ── DESSERT & CAFÉ ──
    {
        id: 5,
        title: "Berry Tart Whiskers",
        category: "sweets",
        price: "€12.00",
        desc: "Deeply confused by its own existence. It does not know why it is a tart. It does not know why it is sweet. It has one brain cell, and it is currently buffering.",
        img: "https://i.pinimg.com/1200x/bb/33/c8/bb33c8fb5270d8076f09662a3ce5ef79.jpg"
    },
    {
        id: 7,
        title: "Scoop of Indifference",
        category: "sweets",
        price: "€14.50",
        desc: "A classic vanilla bean sphere that simply does not care. You can call its name, wave toys at it, or plead for attention—it remains unmoved. It is the culinary equivalent of being left on 'read'.",
        img: "https://i.pinimg.com/736x/91/59/6c/91596c995dfd2b7dc660ca54cf512087.jpg"
    },
    {
        id: 8,
        title: "Standard Cat-puccino",
        category: "sweets",
        price: "€6.50",
        desc: "A dark roast with a severe attitude problem. It refuses to be perceived before 10 AM. It judges your outfit with a bitter, caffeinated stare and absolutely zero remorse.",
        img: "https://i.pinimg.com/736x/1f/65/c4/1f65c44e4fed42b4e6263b220361cbd4.jpg"
    },
    {
    id: 13,
    title: "Tirami-sù",
    category: "sweets",
    price: "€11.00",
    desc: "Layers of espresso-soaked sponge and mascarpone developed by a contributor who refused to get out of bed for the entire month of November. Its name means 'lift me up.' It will not lift you up. It will, however, sit with you.",
    img: "https://i.pinimg.com/1200x/c0/bd/92/c0bd92469daa62cd488bfee8da07e743.jpg"
},
];

// ── CATEGORY DISPLAY LABELS ──
const categoryLabels = {
    bakery:   "Bread & Pastry",
    starters: "Starter",
    mains:    "Main",
    sweets:   "Dessert & Café",
};

// ── RENDER ──
const menuGrid = document.getElementById('menu-grid');
const btns = document.querySelectorAll('.filter-btn');

function renderMenu(category) {
    menuGrid.innerHTML = '';
    const items = category === 'all'
        ? menuData
        : menuData.filter(item => item.category === category);

    items.forEach((item, i) => {
        const card = `
            <article class="menu-item" style="animation-delay: ${i * 0.07}s">
                <div class="img-wrapper">
                    <img src="${item.img}" alt="${item.title}" class="item-img" loading="lazy">
                </div>
                <span class="item-category-tag">${categoryLabels[item.category] || item.category}</span>
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

// ── FILTER BUTTONS ──
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderMenu(e.target.dataset.category);
    });
});

// ── INITIAL RENDER ──
renderMenu('all');