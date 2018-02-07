console.log('js loaded');



class Pizza {

    constructor(ingredients = ['cheese']){
        this.ingredients = ingredients;
        this.basePrice = 10;
        this.totalPrice = this.pizzaCost();
    }
    pizzaDescription(){
        let IngredientsList = '';
        for(var i=0;i<this.ingredients.length; i++){
            IngredientsList += ` ${this.ingredients[i]}`;
        }
        return `This Pizza has${IngredientsList}`;
    }   
    toppingCount(){
        return this.ingredients.length;
    }
    toppingCost(){
        if(this.ingredients.length <= 1){
            return 0;
        }else{
            return this.ingredients.length * 0.99;
        }
        
        
    }
    pizzaCost(){
        return this.basePrice + this.toppingCost();

    }
}



let myPizza = new Pizza(['cheese','pepperoni','olives']);

console.log(myPizza);
console.log(myPizza.pizzaDescription());
console.log(myPizza.toppingCount());
console.log('cost: ', myPizza.totalPrice);
let secondPizza = new Pizza(['cheese','sausage']);



class Order {

    constructor(){
        this.pizzaList = [];
        this.orderTotal = this.calculateOrderTotal();
   
    }
    addPizza(newPizza){
        this.pizzaList.push(newPizza);

    }
    calculateOrderTotal(){
        let costSum = 0;
        for(var i = 0; i<this.pizzaList.length; i++){
            costSum += this.pizzaList[i].totalPrice;
        }
        console.log('costSum ', costSum);
        
        return costSum;
    }

}


let newOrder = new Order();
console.log('new Order: ', newOrder);

newOrder.addPizza(myPizza);
newOrder.addPizza(secondPizza);
console.log('order with pizzas: ', newOrder);

console.log('orderTotal: ', newOrder.orderTotal);

console.log(newOrder.calculateOrderTotal());


let cheesePizza = new Pizza();

console.log('cheesePizza: ', cheesePizza);
console.log('myPizza: ', myPizza);
console.log('secondPizza: ', secondPizza);




















// //class is the template.  Animal is an example of a Base class.
// class Animal {
// // you can set a default value for the parameters in the event that the parameter is not passed in. 
//     constructor(color = 'yellow',weight = 2, noise = 'howl') {
//         this.isAlive = true;
//         this.color = color;
//         this.weight = weight;
//         this.noise = noise;
//     }
//     makeNoise(){
//         return this.noise;
//     }
// }

// class Bird extends Animal {
//     constructor(){
//         //super calls the constructor on the parent class.
//         super('purple', 1.5, 'chirp');
//         this.inFlight = false;
//         this.hasFeathers = true;
//     }
//     makeNoise(){
//         console.log('bird version of make noise');
//         return `${this.noise} is the bird noise`;
//     }

// }

// //only after using 'new' do we have an instance of the Animal class.
// let yellowAnimal = new Animal();
// let redAnimal = new Animal('red', 4,'bark');
// let defaultBird = new Bird();
// console.log(defaultBird.makeNoise());


// //polymorphism is having the methods or of your subclasses change to fit the context in which they are being applied. 
// //an override of a parent's method or property definition.  The name remains the same.  


