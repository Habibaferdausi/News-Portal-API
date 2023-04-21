let fetchData = [];
const fetchCategories = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => {
      if (data?.status) {
        showCategories(data.data);
      } else {
        // show alert and return
      }
    });
};
