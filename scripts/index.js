const allCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((response) => response.json())
    .then((json) => displayAllCategories(json.categories));
};
const displayAllCategories = (categories) => {
  const allCategories = document.getElementById("all-categories");
  allCategories.innerHTML = "";
  for (let category of categories) {
    const categoryName = document.createElement("li");
    categoryName.innerHTML = `
        <li><button>${category.category_name}</button></li>
    `;
    allCategories.append(categoryName);
  }
};
allCategories();

const allPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((response) => response.json())
    .then((json) => displayAllPlants(json.plants));
};
const displayAllPlants = (plants) => {
  const allPlants = document.getElementById("all-plants");
  allPlants.innerHTML = "";
  for (let plant of plants) {
    const start = document.createElement("div");
    start.innerHTML = `
        <div class="w-[210px] h-[480px] bg-white flex flex-col justify-center items-center rounded-xl">
            <img src="${plant.image}" class="w-[200px] h-[200px] rounded-xl"/>
            <h1 class="grid justify-items-start w-[200px] text-xl font-semibold noto-serif-normal">${plant.name}</h1>
            <p class="w-[200px] h-[160px] text-sm inter-normal">${plant.description}</p>
            <div class="flex flex-row justify-between w-[200px] mb-2">
                <p class="flex justify-center items-center bg-green-200 rounded-xl w-[140px]">${plant.category}</p>
                <p class="font-semibold">৳ ${plant.price}</p>
            </div>
            <button class="btn btn-success rounded-2xl text-white w-[200px] h-[30px]">Add to Cart</button>
        </div>
    `;
    allPlants.append(start);
  }
};
allPlants();
