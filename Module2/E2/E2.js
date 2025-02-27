document.addEventListener("DOMContentLoaded", () => {
    const recipeNameInput = document.getElementById("recipeName");
    const prepTimeInput = document.getElementById("prepTime");
    const ingredientsInput = document.getElementById("ingredients");
    const generateButton = document.getElementById("generateCard");
    const resultDiv = document.getElementById("result");

    generateButton.addEventListener("click", () => {
        const name = recipeNameInput.value.trim();
        const prepTime = prepTimeInput.value.trim();
        const ingredients = ingredientsInput.value.trim().split("\n").filter(ing => ing);

        if (!name || !prepTime || ingredients.length === 0) {
            alert("Vul alle velden correct in.");
            return;
        }

        const recipeCard = `
            <h2>🥘 ${name}</h2>
            <p>⏱️ Bereidingstijd: ${prepTime} minuten</p>
            <h3>Ingrediënten:</h3>
            <ul>
                ${ingredients.map(ing => `<li>${ing}</li>`).join("")}
            </ul>
        `;

        resultDiv.innerHTML = recipeCard;
    });
});
