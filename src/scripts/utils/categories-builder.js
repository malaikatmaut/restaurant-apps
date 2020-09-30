const CategoriesBuilder = {
  joinCategories(categories) {
    let result = '';
    categories.forEach((category) => {
      result += `${category.name}, `;
    });
    return result.slice(0, -2);
  },
};

export default CategoriesBuilder;
