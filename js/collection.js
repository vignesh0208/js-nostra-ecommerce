const updateElement = document.getElementById('products');
const filter = document.getElementById('filterCategory');
const search = document.getElementById('searchProduct');

filter.addEventListener('change', (e) => hadleFilter(e.target.value));
search.addEventListener('keyup', (e) => hadleSearch(e.target.value));

function update(Products = []) {
  if (Products && Products.length === 0) return;
  Products.forEach((prod) => {
    let createElement = document.createElement('div');
    createElement.className =
      'flex flex-col w-[18vw] rounded  hover:shadow-lg cursor-pointer';
    createElement.innerHTML = `
    <div class="flex justify-center items-center w-[200px] h-[200px] mx-auto mb-2">
      <img class="h-full" src="${prod.image}" alt="${prod.title}">
    </div>
    <div class="p-4 capitalize">
      <p>${prod.category}</p>
      <h2>${prod.title}</h2>
      <p>₹${prod.price}</p>
    </div>
    `;
    updateElement.append(createElement);
  });
}

function hadleFilter(value = '') {
  let filter = [];
  if (!value) return update(Products);
  filter = Products.filter((val) => val.category === value);
  updateElement.innerHTML = '';
  update(filter && filter?.length > 0 ? filter : []);
}

function hadleSearch(value = '') {
  console.log({ value });
  let filter = [];
  if (!value) return update(Products);
  filter = Products.filter((val) => val.title.includes(value));
  updateElement.innerHTML = '';
  update(filter && filter?.length > 0 ? filter : []);
}

update(Products);
