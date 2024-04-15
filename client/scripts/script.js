const fetchProducts = async () => {
  try {
    const response = await fetch(`http://localhost:4444/api/products`);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

const displayProducts = (products, pageNum) => {
  const productInnerHTML = [];
  for (let i = 9 * pageNum - 9; i < 9 * pageNum; i++) {
    if (products[i]) {
      const productHTML = `
      <section id="${products[i].id}">
        <p>${products[i].productName}</p>
      </section>`;

      productInnerHTML.push(productHTML);
    }
  }

  const productSection = document.querySelector(`#productSection`);
  productSection.innerHTML = productInnerHTML.join(``);
};

const execute = async () => {
  const products = await fetchProducts();

  if (products) {
    const pageNumberElem = document.querySelector(`#pageNumber`);
    let pageNumber = Number(pageNumberElem.getAttribute(`value`));
    displayProducts(products, pageNumber);

    const maxPage = Math.ceil(products.length / 9);

    const prevPage = document.querySelector(`#prevPage`);
    const nextPage = document.querySelector(`#nextPage`);
    if (pageNumber === 1) prevPage.style.display = `none`;

    const pageButtons = document.querySelectorAll(`.pageButtons`);
    pageButtons.forEach((button) => {
      button.addEventListener(`click`, () => {
        if (button.getAttribute(`id`) === `nextPage` && pageNumber < maxPage) {
          pageNumber++;
          pageNumberElem.setAttribute(`value`, pageNumber);
          pageNumberElem.innerHTML = pageNumber;
          displayProducts(products, pageNumber);
          if (pageNumber === 2) prevPage.style.display = `inline`;
          if (pageNumber === maxPage) nextPage.style.display = `none`;
        }
        if (button.getAttribute(`id`) === `prevPage` && pageNumber > 1) {
          pageNumber--;
          pageNumberElem.setAttribute(`value`, pageNumber);
          pageNumberElem.innerHTML = pageNumber;
          displayProducts(products, pageNumber);
          if (pageNumber < maxPage) nextPage.style.display = `inline`;
          if (pageNumber === 1) prevPage.style.display = `none`;
        }
      });
    });
  }
};

execute();
