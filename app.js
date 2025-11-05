// Set this to your real API Gateway invoke URL (from Phase 5) + "/products"
// Example: https://abc123.execute-api.us-east-1.amazonaws.com/prod/products
const API_URL = 'https://a27id2atvb.execute-api.eu-north-1.amazonaws.com/prod/products';

// Product data with images and descriptions
const productData = {
    1: {
        icon: 'fas fa-vase',
        description: 'Handcrafted pottery made by local artisans using traditional techniques and natural clay.',
        image: 'images/pottery.svg'
    },
    2: {
        icon: 'fas fa-shopping-basket',
        description: 'Beautiful woven baskets crafted from indigenous materials by skilled community artisans.',
        image: 'images/basket.svg'
    },
    3: {
        icon: 'fas fa-tshirt',
        description: 'Traditional African clothing featuring authentic patterns and locally sourced fabrics.',
        image: 'images/clothing.svg'
    }
};

function formatCurrency(value) {
    return `R${Number(value).toFixed(2)}`;
}

async function loadProducts() {
    const statusEl = document.getElementById('status');
    const container = document.getElementById('products');
    
    statusEl.textContent = 'Loading products…';
    
    try {
        const resp = await fetch(API_URL, { method: 'GET' });
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        
        const products = await resp.json();
        container.innerHTML = '';
        
        if (!Array.isArray(products) || products.length === 0) {
            statusEl.textContent = 'No products found.';
            return;
        }
        
        statusEl.textContent = `Found ${products.length} product(s).`;
        
        products.forEach(product => {
            const productInfo = productData[product.id] || {
                icon: 'fas fa-box',
                description: 'Quality tech product for your needs.',
                image: 'images/laptop-bag.svg'
            };
            
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${productInfo.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">
                </div>
                <h3>${product.name || 'Unnamed product'}</h3>
                <p class="price">${formatCurrency(product.price ?? 0)}</p>
                <p class="product-description">${productInfo.description}</p>
                <button class="buy-btn" onclick="buyProduct('${product.name}')">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            `;
            
            container.appendChild(productCard);
        });
        
    } catch (err) {
        // If API fails, show sample products with images
        statusEl.textContent = 'Showing sample products';
        container.innerHTML = '';
        
        const sampleProducts = [
            {id: 1, name: 'Handcrafted Pottery', price: 299.99},
            {id: 2, name: 'Woven Basket', price: 149.99},
            {id: 3, name: 'Traditional Clothing', price: 459.99}
        ];
        
        sampleProducts.forEach(product => {
            const productInfo = productData[product.id];
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${productInfo.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">
                </div>
                <h3>${product.name}</h3>
                <p class="price">${formatCurrency(product.price)}</p>
                <p class="product-description">${productInfo.description}</p>
                <button class="buy-btn" onclick="buyProduct('${product.name}')">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            `;
            
            container.appendChild(productCard);
        });
        
        console.error('Error fetching products:', err);
    }
}

function buyProduct(productName) {
    alert(`Thank you for your interest in ${productName}! 
    
This is a demo website. In a real store, this would add the item to your cart.
    
Contact us at info@ubuntucrafts.co.za to place an order.`);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Load products when page loads
    loadProducts();
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
    }
});