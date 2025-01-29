const initialProducts = [
    { id: 1, name: "Modern Desk Lamp", price: 129.99, description: "Sleek and adjustable desk lamp with wireless charging base", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80", category: "Lighting" },
    { id: 2, name: "Ergonomic Office Chair", price: 299.99, description: "Premium mesh office chair with lumbar support", image: "https://images.unsplash.com/photo-1505797149-35ebcb05a232?auto=format&fit=crop&w=800&q=80", category: "Furniture" },
    { id: 3, name: "Minimalist Wall Clock", price: 49.99, description: "Silent movement wall clock with Scandinavian design", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80", category: "Decor" },
    { id: 4, name: "Ceramic Plant Pot", price: 34.99, description: "Hand-crafted ceramic pot with drainage system", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80", category: "Home & Garden" }
];

const moreProducts = [
    { id: 5, name: "Wireless Speaker", price: 179.99, description: "360° sound with 24-hour battery life", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80", category: "Electronics" },
    { id: 6, name: "Leather Notebook", price: 24.99, description: "Premium leather-bound notebook with recycled paper", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80", category: "Stationery" },
    { id: 7, name: "Coffee Maker", price: 89.99, description: "Programmable coffee maker with thermal carafe", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80", category: "Appliances" },
    { id: 8, name: "Throw Blanket", price: 59.99, description: "Soft woven throw blanket made from recycled materials", image: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=800&q=80", category: "Home & Garden" },
    { id: 9, name: "Smart Table Lamp", price: 149.99, description: "Voice-controlled lamp with color changing capabilities", image: "https://images.unsplash.com/photo-1543198126-c78d0d4d1e38?auto=format&fit=crop&w=800&q=80", category: "Smart Home" },
    { id: 10, name: "Bamboo Organizer", price: 39.99, description: "Sustainable desk organizer with multiple compartments", image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&w=800&q=80", category: "Office" },
    { id: 11, name: "Aromatherapy Diffuser", price: 79.99, description: "Ultrasonic diffuser with ambient LED lighting", image: "https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=800&q=80", category: "Wellness" },
    { id: 12, name: "Geometric Wall Art", price: 199.99, description: "Modern metal wall sculpture with gold finish", image: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=800&q=80", category: "Art" }
];

let products = [...initialProducts];

function renderProducts() {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "group relative bg-white rounded-lg shadow-sm overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-lg";
        productCard.innerHTML = `
            <div class="w-full">
                <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover transition duration-300 group-hover:scale-105" />
            </div>
            <div class="p-4">
                <span class="text-sm text-blue-600 font-medium">${product.category}</span>
                <h3 class="mt-1 text-lg font-semibold text-gray-900">${product.name}</h3>
                <p class="mt-1 text-gray-500 text-sm">${product.description}</p>
                <div class="mt-3 flex items-center justify-between">
                    <span class="text-lg font-bold text-gray-900">₹${product.price}</span>
                    <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

document.getElementById("load-more").addEventListener("click", () => {
    products = [...products, ...moreProducts];
    renderProducts();
    document.getElementById("load-more-container").style.display = "none";
});

renderProducts();
