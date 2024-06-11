document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll(".box[data-category]");
    const products = document.querySelectorAll(".box-catalogue li");
  
    categories.forEach(category => {
      category.addEventListener("click", function() {
        const selectedCategory = this.getAttribute("data-category");
  
        products.forEach(product => {
          if (product.getAttribute("data-category") === selectedCategory || selectedCategory === "all") {
            product.style.display = "block";
          } else {
            product.style.display = "none";
          }
        });
  
        // Adicionar classe ativa à categoria selecionada
        categories.forEach(cat => cat.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });
  