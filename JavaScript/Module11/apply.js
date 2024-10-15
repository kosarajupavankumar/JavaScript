// create the function for the bind method

const parent ={
    health: 100,
    addHealth: function(num1, num2){
        this.health += num1 + num2;
    }
};

console.log(parent.health);

parent.addHealth(10, 20);

const child = {
    health: 100,
};

parent.addHealth.call(child, 10, 20);

parent.addHealth.apply(child, [10, 20]);

cons