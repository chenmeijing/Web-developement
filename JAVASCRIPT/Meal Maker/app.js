const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn){
    this._courses.appetizers = appetizerIn;
  },
  get mains(){
    return this._courses.mains;
  },
  set mains(mainIn){
    this._courses.mains = mainIn;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set desserts(dessertIn){
    this._courses.desserts = dessertIn;
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    };

    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()* dishes.length);
    return dishes[randomIndex];

  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name} $(${appetizer.price}), ${main.name} $(${main.price}) and ${dessert.name} $(${dessert.price}).The price is $${totalPrice}.`;
    }
  };

menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Prawn Coctail', 4.25);
menu.addDishToCourse('appetizers', 'Garlic Bread', 3.50);
//...
menu.addDishToCourse('mains', 'Lasagna', 9.75);
menu.addDishToCourse('mains', 'Ribeye Steak', 14.95);
menu.addDishToCourse('mains', 'Fish & Chips', 12.95);
//...
menu.addDishToCourse('desserts', 'Cheese Cake', 4.50);
menu.addDishToCourse('desserts', 'Creme Brule', 4.25);
menu.addDishToCourse('desserts', 'Cheese Board', 3.25);

let meal = menu.generateRandomMeal();
console.log(meal);
