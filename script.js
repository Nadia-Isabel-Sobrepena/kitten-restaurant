// 1. The Data (Editable Menu)
const menuItems = [
    {
        id: 1,
        title: "Cloud Pancakes",
        category: "breakfast",
        price: "$14",
        desc: "Three fluffy soufflé pancakes topped with whipped honey butter and seasonal berries.",
        tags: ["v"],
        img: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "Sunrise Avo Toast",
        category: "breakfast",
        price: "$16",
        desc: "Sourdough, smashed avocado, heirloom tomatoes, radish, and a poached egg.",
        tags: ["v"],
        img: "https://images.unsplash.com/photo-1525351484163-7529414395d8?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "Honey Basil Latte",
        category: "drinks",
        price: "$6.50",
        desc: "Espresso, steamed oat milk, house-made basil syrup, and a dusting of cinnamon.",
        tags: ["v", "gf"],
        img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Garden Goddess Bowl",
        category: "lunch",
        price: "$18",
        desc: "Quinoa, roasted sweet potato, kale, chickpeas, and tahini green goddess dressing.",
        tags: ["v", "gf"],
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        title: "Rosemary Focaccia",
        category: "lunch",
        price: "$17",
        desc: "House-baked focaccia sandwich with prosciutto, burrata, fig jam, and arugula.",
        tags: [],
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "Earl Grey Cake",
        category: "sweets",
        price: "$9",
        desc: "A slice of floral infused cake with lemon buttercream frosting and edible flowers.",
        tags: ["v"],
        img: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        title: "Matcha Float",
        category: "drinks",
        price: "$8",
        desc: "Iced ceremonial matcha with a scoop of house-made vanilla bean ice cream.",
        tags: ["gf"],
        img: "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        title: "Truffle Tart",
        category: "lunch",
        price: "$15",
        desc: "Puff pastry topped with wild mushrooms, thyme, truffle oil, and goat cheese.",
        tags: ["v"],
        img: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80"
    }
];

// 2. Select DOM Elements
const menuGrid = document.getElementById('menu-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// 3. Function to Display Menu Items
function displayMenuItems(menuList) {
    let displayMenu = menuList.map(function (item) {
        
        // Generate Tags HTML (GF / Veg)
        let tagsHtml = '';
        if (item.tags.includes('gf')) tagsHtml += '<span class="tag gf">GF</span>';
        if (item.tags.includes('v')) tagsHtml += '<span class="tag v">VEG</span>';

        return `
            <article class="menu-item">
                <img src="${item.img}" alt="${item.title}" class="item-image">
                <div class="item-content">
                    <div class="item-header">
                        <h3 class="item-title">${item.title}</h3>
                        <span class="item-price">${item.price}</span>
                    </div>
                    <p class="item-desc">${item.desc}</p>
                    <div class="dietary-tags">
                        ${tagsHtml}
                    </div>
                </div>
            </article>
        `;
    });
    
    // Join the array into a big string and put it in the grid
    displayMenu = displayMenu.join("");
    menuGrid.innerHTML = displayMenu;
}

// 4. Filter Functionality
filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        e.currentTarget.classList.add('active');

        // Get the category value
        const category = e.currentTarget.dataset.category;
        
        // Filter Logic
        const menuCategory = menuItems.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });

        if (category === 'all') {
            displayMenuItems(menuItems);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});

// 5. Initial Load
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menuItems);
});