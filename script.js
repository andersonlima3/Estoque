const productsContainer = document.getElementById("productsContainer");
const addProductForm = document.getElementById("addProductForm");

let products = [];

function renderProducts() {
  productsContainer.innerHTML = "";

  products.forEach((product, index) => {
    const item = document.createElement("div");
    item.className = "portfolio-item";
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p><strong>Quantidade:</strong> ${product.quantity}</p>
        <p><strong>Preço:</strong> R$ ${Number(product.price).toFixed(2)}</p>
      </div>
      <div class="product-actions">
        <button class="edit-btn" onclick="editProduct(${index})">Editar</button>
        <button class="delete-btn" onclick="deleteProduct(${index})">Remover</button>
      </div>
    `;
    productsContainer.appendChild(item);
  });
}

function addProduct(e) {
  e.preventDefault();

  const name = document.getElementById("productName").value.trim();
  const image = document.getElementById("productImage").value.trim();
  const quantity = document.getElementById("productQuantity").value.trim();
  const price = document.getElementById("productPrice").value.trim();

  if (!name || !image || !quantity || !price) return alert("Preencha todos os campos!");

  products.push({ name, image, quantity, price });
  renderProducts();
  addProductForm.reset();
}

function deleteProduct(index) {
  if (confirm("Tem certeza que deseja remover este produto?")) {
    products.splice(index, 1);
    renderProducts();
  }
}

function editProduct(index) {
  const product = products[index];

  document.getElementById("productName").value = product.name;
  document.getElementById("productImage").value = product.image;
  document.getElementById("productQuantity").value = product.quantity;
  document.getElementById("productPrice").value = product.price;

  products.splice(index, 1);
  renderProducts();
}

addProductForm.addEventListener("submit", addProduct);
