// Set this to your real API Gateway invoke URL (from Phase 5) + "/products"
// Example: https://abc123.execute-api.us-east-1.amazonaws.com/prod/products
const API_URL = 'https://a27id2atvb.execute-api.eu-north-1.amazonaws.com/prod/products';

// Product data with images and descriptions
const productData = {
    1: { description: 'Handcrafted pottery made by local artisans using traditional techniques and natural clay.', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop' },
    2: { description: 'Beautiful woven baskets crafted from indigenous materials by skilled community artisans.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop' },
    3: { description: 'Traditional African clothing featuring authentic patterns and locally sourced fabrics.', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop' },
    4: { description: 'Organic skincare products made from indigenous plants and natural ingredients.', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop' },
    5: { description: 'Hand-carved wooden sculptures showcasing traditional African artistry.', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop' },
    6: { description: 'Colorful beaded jewelry made by local women artisans.', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop' },
    7: { description: 'Traditional clay pots perfect for cooking and storage.', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop' },
    8: { description: 'Handwoven textiles with authentic African patterns.', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop' },
    9: { description: 'Natural soap bars made with organic ingredients.', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop' },
    10: { description: 'Decorative wall hangings featuring traditional designs.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop' },
    11: { description: 'Hand-painted ceramic bowls for dining and decoration.', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop' },
    12: { description: 'Traditional African masks carved from local wood.', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop' },
    13: { description: 'Organic body oils infused with indigenous herbs.', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop' },
    14: { description: 'Woven placemats perfect for traditional dining.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop' },
    15: { description: 'Handcrafted leather bags with traditional patterns.', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop' },
    16: { description: 'Natural face creams made from aloe and shea butter.', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop' },
    17: { description: 'Decorative pottery vases with unique glazing.', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop' },
    18: { description: 'Traditional headwraps in vibrant colors.', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop' },
    19: { description: 'Hand-carved wooden spoons and utensils.', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop' },
    20: { description: 'Beaded bracelets with traditional significance.', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop' },
    21: { description: 'Organic lip balms made from natural beeswax.', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop' },
    22: { description: 'Woven storage baskets in various sizes.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop' },
    23: { description: 'Traditional African drums handcrafted by artisans.', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop' },
    24: { description: 'Embroidered cushion covers with ethnic designs.', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop' },
    25: { description: 'Natural hair oils for traditional hair care.', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop' },
    26: { description: 'Hand-painted ceramic tiles for decoration.', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop' },
    27: { description: 'Traditional African sandals made from leather.', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop' },
    28: { description: 'Woven table runners with geometric patterns.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop' },
    29: { description: 'Handcrafted candles with natural fragrances.', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop' },
    30: { description: 'Traditional clay water jugs for cooling.', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop' },
    31: { description: 'Beaded necklaces with cultural significance.', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop' },
    32: { description: 'Hand-woven blankets for warmth and comfort.', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop' }
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
                description: 'Authentic handcrafted product made by local artisans.',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
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
            {id: 3, name: 'Traditional Clothing', price: 459.99},
            {id: 4, name: 'Organic Skincare', price: 89.99},
            {id: 5, name: 'Wooden Sculpture', price: 399.99},
            {id: 6, name: 'Beaded Jewelry', price: 79.99},
            {id: 7, name: 'Clay Cooking Pot', price: 199.99},
            {id: 8, name: 'Handwoven Textile', price: 249.99},
            {id: 9, name: 'Natural Soap Bar', price: 45.99},
            {id: 10, name: 'Wall Hanging', price: 179.99},
            {id: 11, name: 'Ceramic Bowl', price: 129.99},
            {id: 12, name: 'African Mask', price: 349.99},
            {id: 13, name: 'Body Oil', price: 69.99},
            {id: 14, name: 'Woven Placemat', price: 39.99},
            {id: 15, name: 'Leather Bag', price: 279.99},
            {id: 16, name: 'Face Cream', price: 99.99},
            {id: 17, name: 'Pottery Vase', price: 189.99},
            {id: 18, name: 'Traditional Headwrap', price: 59.99},
            {id: 19, name: 'Wooden Utensils', price: 49.99},
            {id: 20, name: 'Beaded Bracelet', price: 35.99},
            {id: 21, name: 'Lip Balm', price: 25.99},
            {id: 22, name: 'Storage Basket', price: 119.99},
            {id: 23, name: 'African Drum', price: 449.99},
            {id: 24, name: 'Cushion Cover', price: 79.99},
            {id: 25, name: 'Hair Oil', price: 55.99},
            {id: 26, name: 'Ceramic Tiles', price: 159.99},
            {id: 27, name: 'Leather Sandals', price: 139.99},
            {id: 28, name: 'Table Runner', price: 89.99},
            {id: 29, name: 'Scented Candle', price: 65.99},
            {id: 30, name: 'Clay Water Jug', price: 109.99},
            {id: 31, name: 'Beaded Necklace', price: 95.99},
            {id: 32, name: 'Woven Blanket', price: 329.99}
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