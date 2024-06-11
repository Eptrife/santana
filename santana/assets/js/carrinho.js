// carrinho.js

document.addEventListener("DOMContentLoaded", () => {
    const cartModal = document.getElementById("cartModal");
    const cartBtn = document.getElementById("openCartModal");
    const closeBtn = document.getElementsByClassName("close")[0];
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const btnFinalizarCompra = document.getElementById("btnFinalizarCompra");

    let cart = [];

    const updateCart = () => {
        cartItemsContainer.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.innerHTML = `
                <p>${item.nome} - ${item.quantidade} x R$${item.valor.toFixed(2)}</p>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.valor * item.quantidade;
        });
        cartTotal.innerText = `R$ ${total.toFixed(2)}`;
    };

    document.querySelectorAll('.fa-shopping-cart').forEach(cartIcon => {
        cartIcon.addEventListener('click', (event) => {
            const produtoId = event.target.dataset.produtoid;
            const produto = produtos[produtoId];
            const itemIndex = cart.findIndex(item => item.id === produtoId);

            if (itemIndex > -1) {
                cart[itemIndex].quantidade += 1;
            } else {
                cart.push({ ...produto, quantidade: 1 });
            }

            updateCart();

            Swal.fire({
                title: 'Adicionado ao Carrinho',
                text: `${produto.nome} foi adicionado ao carrinho com sucesso!`,
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        });
    });

    cartBtn.onclick = () => {
        cartModal.style.display = "block";
        updateCart();
    };

    closeBtn.onclick = () => {
        cartModal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = "none";
        }
    };

    btnFinalizarCompra.onclick = () => {
        Swal.fire({
            title: 'Compra feita com sucesso!',
            text: 'Retire na loja',
            icon: 'success',
            confirmButtonText: 'Ok'
        }).then(() => {
            cart = [];
            cartModal.style.display = "none";
            updateCart();
        });
    };

    document.getElementById('payment-method').addEventListener('change', function() {
        var paymentDetails = document.getElementById('payment-details');
        var selectedPayment = this.value;
      
        paymentDetails.innerHTML = ''; // Clear previous payment details
      
        if (selectedPayment === 'cartao') {
          paymentDetails.innerHTML = `
            <label for="card-number">Número do Cartão:</label>
            <input type="text" id="card-number" placeholder="Digite o número do cartão">
            <label for="card-installments">Parcelas:</label>
            <select id="card-installments">
              <option value="1">1x</option>
              <option value="2">2x</option>
            </select>
          `;
        } else if (selectedPayment === 'boleto') {
          paymentDetails.innerHTML = `
            <p>Boleto gerado com sucesso:</p>
            <pre>34191.79001 01043.510047 91020.150008 6 83900000005000</pre>
          `;
        } else if (selectedPayment === 'pix') {
          paymentDetails.innerHTML = `
            <p>Escaneie o QR Code abaixo para pagar via Pix:</p>
            <img src="assets/img/QR/QRCODE.png" alt="QR Code Pix">
          `;
        }
      });
});

const produtos = {
    // PRODUTOS DA PAGINA DE PRODUTOS, COMEÇANDO DO 20
    20: {
        id: 20,
        nome: "Blusa preta",
        valor: 59.90
    },
    21: {
        id: 21,
        nome: "Jaqueta Jeans",
        valor: 159.90
    },
    22: {
        id: 22,
        nome: "Calça Jeans",
        valor: 200.00
    },
    23: {
        id: 23,
        nome: "Chapeu",
        valor: 25.90
    },
    24: {
        id: 24,
        nome: "Blase",
        valor: 205.00
    },
    25: {
        id: 25,
        nome: "Saia Jeans",
        valor: 59.90
    },
    26: {
        id: 26,
        nome: "Short Jeans",
        valor: 99.90
    },
    27: {
        id: 27,
        nome: "Camisa Social",
        valor: 300.00
    },
    28: {
        id: 28,
        nome: "Macacão masculino",
        valor: 99.90
    },
    29: {
        id: 29,
        nome: "Macacão feminino",
        valor: 99.90
    },
    30: {
        id: 30,
        nome: "Kit bebê masculino",
        valor: 550.90
    },
    31: {
        id: 31,
        nome: "Kit bebê feminino",
        valor: 720.90
    },
};

document.addEventListener('DOMContentLoaded', () => {
    const categoryBoxes = document.querySelectorAll('.box[data-category]');
    const productItems = document.querySelectorAll('.box-catalogue li');
  
    categoryBoxes.forEach(box => {
      box.addEventListener('click', () => {
        const selectedCategory = box.getAttribute('data-category');
        productItems.forEach(item => {
          if (item.getAttribute('data-category') === selectedCategory || selectedCategory === 'all') {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
});
