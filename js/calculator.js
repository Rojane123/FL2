class ServingCalculator {
    constructor(recipe, originalServings) {
        this.recipe = recipe;
        this.originalServings = originalServings;
        this.currentServings = originalServings;
    }
    
    updateServings(newServings) {
        this.currentServings = newServings;
        this.updateIngredients();
    }
    
    updateIngredients() {
        const ratio = this.currentServings / this.originalServings;
        const ingredients = document.querySelectorAll('.ingredient');
        
        ingredients.forEach((ingredient, index) => {
            const originalAmount = this.recipe.ingredients[index].amount;
            const newAmount = (originalAmount * ratio).toFixed(2);
            const unit = this.recipe.ingredients[index].unit;
            const name = this.recipe.ingredients[index].name;
            
            ingredient.textContent = `${newAmount} ${unit} ${name}`;
        });
    }
}