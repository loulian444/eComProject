const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get(`id`);
console.log(id);

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
    <section class="product" id="${product.id}">
      <h2>${product.productName}</h2>
      <img src="${product.image}" alt="${product.description}" />
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      ${id ? `<button class="favButton">Add Fav</button>` : null}
    </section>`;
  });

  const productSection = document.querySelector(`#productSection`);
  productSection.innerHTML = productInnerHTML.join(``);
};

const execute = async () => {
  const pageNumberElem = document.querySelector(`#pageNumber`);
  let pageNumber = Number(pageNumberElem.getAttribute(`value`));
  const products = await fetchProducts(pageNumber);

  if (products) {
    displayProducts(products.products);

    if (id) {
      console.log(id);
      const favButtons = document.querySelectorAll(`.favButton`);
      favButtons.forEach((button) => {
        button.addEventListener(`click`, () => {
          console.log(`gg`)
        })
      })
    }

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
          if (pageNumber === 2) prevPage.removeAttribute(`style`);
          if (products.lastPage) nextPage.style.visibility = `hidden`;
        }
        if (button.getAttribute(`id`) === `prevPage` && pageNumber > 1) {
          pageNumber--;
          pageNumberElem.setAttribute(`value`, pageNumber);
          pageNumberElem.innerHTML = pageNumber;
          const products = await fetchProducts(pageNumber);
          displayProducts(products.products);
          if (!products.lastPage) nextPage.removeAttribute(`style`);
          if (pageNumber === 1) prevPage.style.visibility = `hidden`;
        }
      });
    });
  }
};

execute();
