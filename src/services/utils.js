export const url = {
  home: () => "/",

  catalog: () => "/shop/catalog",

  category: (category) => `/shop/catalog/${category.slug}`,

  product: (product) => `/shop/products/${product.slug}`,
};

export const makeIdGenerator = () => {
  let lastId = 0;

  return () => {
    lastId += 1;

    return lastId;
  };
};

export const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
