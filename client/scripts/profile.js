const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get(`id`);

if (id) {
  const navbar = document.querySelector(`#navbar`);
  navbar.innerHTML = `<a href="http://localhost:4444/index.html?id=${id}">Home</a>`;
}

const getMyInfo = async (id) => {
  try {
    const response = await fetch(`http://localhost:4444/auth/me?id=${id}`);
    console.log(`http://localhost:4444/auth/me?id=${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const displayUser = (user) => {
  const profile = document.querySelector(`#profile`);
  const favProductsHTML = user.favProducts.map((product) => {
    return `<section class="product" id="${product.id}">
      <h2>${product.productName}</h2>
      <img src="${product.image}" alt="${product.description}" />
      <p>${product.description}</p>
      <p>Brand: ${product.brand}</p>
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
    </section>`;
  });
  profileInnerHTML = `
    <p>User: ${user.username}</p>
    <p>Email: ${user.email}</p>
    <h2>Favorite Products</h2>
    <section class="flex" id="productSection">
    ${favProductsHTML.join(``)}
    </section>
  `;

  profile.innerHTML += profileInnerHTML;
};

const execute = async () => {
  const myInfo = await getMyInfo(id);

  if (myInfo) displayUser(myInfo);
};

execute();
