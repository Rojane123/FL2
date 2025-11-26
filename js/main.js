class SaborSalvadoreno {
    constructor() {
        this.currentCalculator = null;
        this.init();
    }
    
    init() {
        this.renderCulturalInfo();
        this.renderRecipeGrid();
        this.setupEventListeners();
    }
    
    renderCulturalInfo() {
        const traditionsList = document.getElementById('traditions-list');
        if (traditionsList && culturalInfo) {
            culturalInfo.traditions.forEach(tradition => {
                const li = document.createElement('li');
                li.textContent = tradition;
                traditionsList.appendChild(li);
            });
        }
    }
    
    renderRecipeGrid() {
        const grid = document.getElementById('recipe-grid');
        
        recipes.forEach(recipe => {
            const views = this.getViews(recipe.id);
            const likes = this.getLikes(recipe.id);
            const rating = this.getAverageRating(recipe.id);
            
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `
                <div class="recipe-image">
                    <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
                </div>
                <div class="recipe-info">
                    <h3 class="recipe-title">${recipe.name}</h3>
                    <div class="recipe-meta">
                        <div class="meta-item">
                            <span class="meta-label">Preparación</span>
                            <span class="meta-value">${recipe.prepTime}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Cocción</span>
                            <span class="meta-value">${recipe.cookTime}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Dificultad</span>
                            <span class="meta-value difficulty-badge difficulty-${this.getDifficultyClass(recipe.difficulty)}">${recipe.difficulty}</span>
                        </div>
                    </div>
                    <div class="recipe-stats">
                        <span>👁️ ${views} vistas</span>
                        <span>❤️ ${likes} me gusta</span>
                        <span>⭐ ${rating.toFixed(1)} (${this.getRatingCount(recipe.id)})</span>
                    </div>
                    <div class="recipe-actions">
                        <button class="btn btn-like" onclick="app.toggleLike('${recipe.id}')">
                            ${this.hasLiked(recipe.id) ? '❤️ Me Gusta' : '🤍 Me Gusta'}
                        </button>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('btn')) {
                    this.openRecipe(recipe.id);
                }
            });
            
            grid.appendChild(card);
        });
    }
    
    openRecipe(recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);
        this.incrementViews(recipeId);
        this.showRecipeModal(recipe);
    }
    
    showRecipeModal(recipe) {
        const modal = document.getElementById('recipe-modal');
        const details = document.getElementById('recipe-details');
        
        const rating = this.getAverageRating(recipe.id);
        const userRating = this.getUserRating(recipe.id);
        
        details.innerHTML = `
            <div class="recipe-header">
                <div class="header-top">
                    <h2>${recipe.name}</h2>
                    <button class="btn btn-print" onclick="app.printRecipe('${recipe.id}')">🖨️ Imprimir</button>
                </div>
                <div class="story">${recipe.story}</div>
                <div class="recipe-meta">
                    <div class="meta-item">
                        <span class="meta-label">Preparación</span>
                        <span class="meta-value">${recipe.prepTime}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Cocción</span>
                        <span class="meta-value">${recipe.cookTime}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Porciones</span>
                        <span class="meta-value">${recipe.servings}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Dificultad</span>
                        <span class="meta-value difficulty-badge difficulty-${this.getDifficultyClass(recipe.difficulty)}">${recipe.difficulty}</span>
                    </div>
                </div>
            </div>
            
            ${recipe.tips ? `
            <div class="tips-section">
                <h4>💡 Consejos de Cocina</h4>
                <ul class="tips-list">
                    ${recipe.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            
            <div class="recipe-controls">
                <div class="serving-calculator">
                    <label>Ajustar Porciones:</label>
                    <input type="number" class="serving-input" value="${recipe.servings}" min="1" max="20" 
                           onchange="app.updateServings(${recipe.servings}, this.value)">
                </div>
                
                <div class="rating-system">
                    <span>Califica esta receta:</span>
                    <div class="stars">
                        ${[1,2,3,4,5].map(star => 
                            `<span class="star ${star <= userRating ? 'active' : ''}" 
                                   onclick="app.rateRecipe('${recipe.id}', ${star})">★</span>`
                        ).join('')}
                    </div>
                    <span>(${rating.toFixed(1)} promedio)</span>
                </div>
                

            </div>
            
            <div class="ingredients-list">
                <h3>🥕 Ingredientes</h3>
                ${recipe.ingredients.map(ing => 
                    `<div class="ingredient">${ing.amount} ${ing.unit} ${ing.name}</div>`
                ).join('')}
            </div>
            
            <div class="instructions">
                <h3>👩🍳 Instrucciones</h3>
                <ol>
                    ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
            
            ${recipe.nutrition ? `
            <div class="nutrition-info">
                <h3>🍎 Información Nutricional (por porción)</h3>
                <div class="nutrition-grid">
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.calories}</div>
                        <div class="nutrition-label">Calorías</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.protein}</div>
                        <div class="nutrition-label">Proteína</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.carbs}</div>
                        <div class="nutrition-label">Carbohidratos</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.fat}</div>
                        <div class="nutrition-label">Grasa</div>
                    </div>
                </div>
            </div>
            ` : ''}
        `;
        
        this.currentCalculator = new ServingCalculator(recipe, recipe.servings);
        modal.style.display = 'block';
    }
    
    setupEventListeners() {
        const modal = document.getElementById('recipe-modal');
        const closeBtn = document.querySelector('.close');
        
        closeBtn.onclick = () => modal.style.display = 'none';
        window.onclick = (e) => {
            if (e.target === modal) modal.style.display = 'none';
        };
        
        // Filter functionality
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterRecipes(btn.dataset.filter);
            });
        });
        
        // Mobile navigation
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    }
    
    getDifficultyClass(difficulty) {
        const map = {
            'Fácil': 'easy',
            'Intermedio': 'medium', 
            'Difícil': 'hard'
        };
        return map[difficulty] || 'medium';
    }
    
    filterRecipes(filter) {
        const cards = document.querySelectorAll('.recipe-card');
        cards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                const difficulty = card.querySelector('.difficulty-badge').textContent.toLowerCase();
                const filterMap = {
                    'easy': 'fácil',
                    'medium': 'intermedio',
                    'hard': 'difícil'
                };
                card.style.display = difficulty === filterMap[filter] ? 'block' : 'none';
            }
        });
    }
    
    updateServings(originalServings, newServings) {
        if (this.currentCalculator) {
            this.currentCalculator.updateServings(parseInt(newServings));
        }
    }
    
    // LocalStorage methods
    incrementViews(recipeId) {
        const views = this.getViews(recipeId) + 1;
        localStorage.setItem(`views_${recipeId}`, views);
        this.updateStats();
    }
    
    getViews(recipeId) {
        return parseInt(localStorage.getItem(`views_${recipeId}`) || '0');
    }
    
    toggleLike(recipeId) {
        const hasLiked = this.hasLiked(recipeId);
        if (hasLiked) {
            localStorage.removeItem(`liked_${recipeId}`);
            const likes = this.getLikes(recipeId) - 1;
            localStorage.setItem(`likes_${recipeId}`, Math.max(0, likes));
        } else {
            localStorage.setItem(`liked_${recipeId}`, 'true');
            const likes = this.getLikes(recipeId) + 1;
            localStorage.setItem(`likes_${recipeId}`, likes);
        }
        this.updateStats();
    }
    
    hasLiked(recipeId) {
        return localStorage.getItem(`liked_${recipeId}`) === 'true';
    }
    
    getLikes(recipeId) {
        return parseInt(localStorage.getItem(`likes_${recipeId}`) || '0');
    }
    
    rateRecipe(recipeId, rating) {
        localStorage.setItem(`rating_${recipeId}`, rating);
        
        // Update ratings array
        const ratings = this.getRatings(recipeId);
        ratings.push(rating);
        localStorage.setItem(`ratings_${recipeId}`, JSON.stringify(ratings));
        
        this.updateRatingDisplay(recipeId);
        this.updateModalStars(recipeId, rating);
        this.updateStats();
    }
    
    getUserRating(recipeId) {
        return parseInt(localStorage.getItem(`rating_${recipeId}`) || '0');
    }
    
    getRatings(recipeId) {
        const ratings = localStorage.getItem(`ratings_${recipeId}`);
        return ratings ? JSON.parse(ratings) : [];
    }
    
    getAverageRating(recipeId) {
        const ratings = this.getRatings(recipeId);
        if (ratings.length === 0) return 0;
        return ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
    }
    
    getRatingCount(recipeId) {
        return this.getRatings(recipeId).length;
    }
    
    updateRatingDisplay(recipeId) {
        const rating = this.getAverageRating(recipeId);
        const count = this.getRatingCount(recipeId);
        const ratingSpan = document.querySelector('.rating-system span:last-child');
        if (ratingSpan) {
            ratingSpan.textContent = `(${rating.toFixed(1)} promedio)`;
        }
        
        // Update modal rating display immediately
        const modalRatingSpan = document.querySelector('.rating-system span:last-of-type');
        if (modalRatingSpan) {
            modalRatingSpan.textContent = `(${rating.toFixed(1)} promedio)`;
        }
    }
    
    updateModalStars(recipeId, userRating) {
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index < userRating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
    
    updateStats() {
        // Re-render the grid to update stats
        document.getElementById('recipe-grid').innerHTML = '';
        this.renderRecipeGrid();
    }
    
    printRecipe(recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);
        const printWindow = window.open('', '_blank');
        
        const printContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>${recipe.name} - Receta</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; color: black; }
                    h1 { color: #1e3c72; text-align: center; }
                    h2 { color: #1e3c72; border-bottom: 2px solid #1e3c72; padding-bottom: 5px; }
                    .story { font-style: italic; margin: 15px 0; padding: 10px; border-left: 4px solid #1e3c72; background: #f8f9fa; }
                    .meta { display: flex; justify-content: space-between; margin: 15px 0; padding: 10px; border: 1px solid #ddd; background: #f8f9fa; }
                    .ingredient { padding: 5px 0; border-bottom: 1px solid #eee; }
                    .instruction { margin: 10px 0; padding: 10px; background: #f9f9f9; border-radius: 5px; }
                    .nutrition { display: flex; justify-content: space-between; margin: 10px 0; }
                    .nutrition-item { text-align: center; padding: 10px; border: 1px solid #ddd; }
                    .tips li { margin: 5px 0; }
                </style>
            </head>
            <body>
                <h1>${recipe.name}</h1>
                <div class="story">${recipe.story}</div>
                
                <div class="meta">
                    <span><strong>Preparación:</strong> ${recipe.prepTime}</span>
                    <span><strong>Cocción:</strong> ${recipe.cookTime}</span>
                    <span><strong>Porciones:</strong> ${recipe.servings}</span>
                    <span><strong>Dificultad:</strong> ${recipe.difficulty}</span>
                </div>
                
                ${recipe.tips ? `
                <h2>💡 Consejos de Cocina</h2>
                <ul class="tips">
                    ${recipe.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
                ` : ''}
                
                <h2>🥕 Ingredientes</h2>
                ${recipe.ingredients.map(ing => 
                    `<div class="ingredient">${ing.amount} ${ing.unit} ${ing.name}</div>`
                ).join('')}
                
                <h2>👩🍳 Instrucciones</h2>
                ${recipe.instructions.map((step, index) => 
                    `<div class="instruction"><strong>${index + 1}.</strong> ${step}</div>`
                ).join('')}
                
                ${recipe.nutrition ? `
                <h2>🍎 Información Nutricional (por porción)</h2>
                <div class="nutrition">
                    <div class="nutrition-item"><strong>${recipe.nutrition.calories}</strong><br>Calorías</div>
                    <div class="nutrition-item"><strong>${recipe.nutrition.protein}</strong><br>Proteína</div>
                    <div class="nutrition-item"><strong>${recipe.nutrition.carbs}</strong><br>Carbohidratos</div>
                    <div class="nutrition-item"><strong>${recipe.nutrition.fat}</strong><br>Grasa</div>
                </div>
                ` : ''}
            </body>
            </html>
        `;
        
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    }
}

// Initialize the app
const app = new SaborSalvadoreno();