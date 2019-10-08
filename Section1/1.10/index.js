// var name = 'Everest';
// var height = 8848;

// var adventureClimbing = { name, height };
// console.log(adventureClimbing);

// var name = 'Everest';
// var height = 8848;
// var output = function() {
//     console.log(`Mt. ${this.name} is ${this.height} meter tall`);
    
// };

// var adventureClimbing = { name, height, output };
// adventureClimbing.output();
var adventureClimbing = {
    name : 'Everest',
    height : 8848,
    output : function() {
        console.log(`Mt. ${this.name} is ${this.height} meter tall`);  
    }
};
adventureClimbing.output();

