// --- MENU DATA ---
const menuData = [
    {
        id: 1,
        title: "Burrata & Fig",
        category: "starters",
        price: "$18",
        desc: "Imported Puglian burrata, caramelized figs, toasted walnut crumble, and aged balsamic glaze.",
        img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=600&q=80",
        tags: ["Vegetarian"]
    },
    {
        id: 2,
        title: "Scallop Crudo",
        category: "starters",
        price: "$22",
        desc: "Thinly sliced diver scallops, blood orange vinaigrette, fennel pollen, and micro cilantro.",
        img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80",
        tags: ["GF"]
    },
    {
        id: 3,
        title: "Truffle Mushroom Risotto",
        category: "mains",
        price: "$28",
        desc: "Arborio rice, wild porcini mushrooms, shaved black truffle, and parmigiano reggiano.",
        img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80",
        tags: ["Vegetarian", "GF"]
    },
    {
        id: 4,
        title: "Pan-Seared Duck Breast",
        category: "mains",
        price: "$34",
        desc: "Crispy skin duck breast, parsnip purée, blackberry reduction, and roasted heirloom carrots.",
        img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
        tags: ["GF"]
    },
    {
        id: 5,
        title: "Herb Crusted Salmon",
        category: "mains",
        price: "$30",
        desc: "Atlantic salmon, dill and lemon crust, served over a bed of warm quinoa salad.",
        img: "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&w=600&q=80",
        tags: ["GF"]
    },
    {
        id: 6,
        title: "Artisan Cheeseboard",
        category: "starters",
        price: "$24",
        desc: "Selection of three local cheeses, honeycomb, house-made crackers, and seasonal fruit.",
        img: "https://images.unsplash.com/photo-1631379578550-7038263db699?auto=format&fit=crop&w=600&q=80",
        tags: ["Sharing"]
    },
    {
        id: 7,
        title: "Lavender Gin Fizz",
        category: "drinks",
        price: "$14",
        desc: "Botanical gin, house lavender syrup, egg white foam, and sparkling soda.",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
        tags: ["Cocktail"]
    },
    {
        id: 8,
        title: "Dark Chocolate Tart",
        category: "sweets",
        price: "$12",
        desc: "70% cacao ganache, sea salt caramel layer, and whipped crème fraîche.",
        img: "https://images.unsplash.com/photo-1549405679-679a9572be46?auto=format&fit=crop&w=600&q=80",
        tags: ["Vegetarian"]
    }
];

// --- RENDER LOGIC ---
const menuGrid = document.getElementById('menu-grid');
const btns = document.querySelectorAll('.filter-btn');

function renderMenu(category) {
    menuGrid.innerHTML = '';
    
    // Fade Out (visual trick - clearing HTML does it instantly, 
    // but CSS animation handles the fade-in of new items)
    
    const items = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);

    items.forEach(item => {
        const tagsHtml = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        const card = `
            <article class="menu-item">
                <div class="item-img-container">
                    <img src="${item.img}" alt="${item.title}" class="item-img">
                </div>
                <div class="item-details">
                    <div class="item-header">
                        <h3 class="item-title">${item.title}</h3>
                        <span class="item-price">${item.price}</span>
                    </div>
                    <p class="item-desc">${item.desc}</p>
                    <div class="tags">${tagsHtml}</div>
                </div>
            </article>
        `;
        menuGrid.innerHTML += card;
    });
}

// --- EVENT LISTENERS ---
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // UI Update
        btns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        // Render
        renderMenu(e.target.dataset.category);
    });
});

// Initialize
renderMenu('all');

// Sticky Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
});