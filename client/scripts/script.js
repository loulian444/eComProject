const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get(`id`);

if (id) {
  const auth = document.querySelector(`#auth`);
  auth.style.display = `none`;

  const navbar = document.querySelector(`#navbar`);
  navbar.innerHTML += `<a href="http://localhost:4444/profile.html?id=${id}">Profile</a>`;
}

const fetchProducts = async (page) => {
  try {
    const response = await fetch(
      `http://localhost:4444/api/products?page=${page}`
    );
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

const displayProducts = (products) => {
  const productInnerHTML = products.map((product) => {
    return `
    <section class="product" id="${product._id}">
      <h2>${product.productName}</h2>
      <img src="${product.image}" alt="${product.description}" />
      <p>${product.description}</p>
      <p>Brand: ${product.brand}</p>
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
      ${id ? `<button class="favButton">Add Fav</button>` : ``}
    </section>`;
  });

  const productSection = document.querySelector(`#productSection`);
  productSection.innerHTML = productInnerHTML.join(``);
};

const addFavorites = async (userId, productId) => {
  const response = await fetch(`http://localhost:4444/api/users`, {
    method: `PUT`,
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify({ userId, productId }),
  });
  const result = await response.json();
  console.log(result);
};

const favEventListener = (id) => {
  if (id) {
    const favButtons = document.querySelectorAll(`.favButton`);
    favButtons.forEach((button) => {
      button.addEventListener(`click`, (e) => {
        addFavorites(id, e.target.parentElement.id);
      });
    });
  }
};

const execute = async () => {
  const pageNumberElem = document.querySelector(`#pageNumber`);
  let pageNumber = Number(pageNumberElem.getAttribute(`value`));
  const products = await fetchProducts(pageNumber);

  if (products) {
    displayProducts(products.products);

    favEventListener(id);

    const prevPage = document.querySelector(`#prevPage`);
    const nextPage = document.querySelector(`#nextPage`);
    if (pageNumber === 1) prevPage.style.visibility = `hidden`;

    const pageButtons = document.querySelectorAll(`.pageButtons`);
    pageButtons.forEach((button) => {
      button.addEventListener(`click`, async () => {
        if (button.getAttribute(`id`) === `nextPage`) {
          pageNumber++;
          pageNumberElem.setAttribute(`value`, pageNumber);
          pageNumberElem.innerHTML = pageNumber;
          const products = await fetchProducts(pageNumber);
          displayProducts(products.products);
          favEventListener(id);
          if (pageNumber === 2) prevPage.removeAttribute(`style`);
          if (products.lastPage) nextPage.style.visibility = `hidden`;
        }
        if (button.getAttribute(`id`) === `prevPage` && pageNumber > 1) {
          pageNumber--;
          pageNumberElem.setAttribute(`value`, pageNumber);
          pageNumberElem.innerHTML = pageNumber;
          const products = await fetchProducts(pageNumber);
          displayProducts(products.products);
          favEventListener(id);
          if (!products.lastPage) nextPage.removeAttribute(`style`);
          if (pageNumber === 1) prevPage.style.visibility = `hidden`;
        }
      });
    });
  }
};

execute();
