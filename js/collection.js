console.log({ Products });
function update(Products = []) {
  if (Products && Products.length === 0) return;
  Products.forEach((prod) => {
    console.log({ prod });
  });
}

update(Products);
