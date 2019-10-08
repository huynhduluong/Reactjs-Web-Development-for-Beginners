// function sayHi() {
    
// }

// console.log(this);

// let nepal = {
//     // add property
//     mountains: ['Everest', 'Fish Tail', 'Annapurna'],
//     //add method
//     printWithDash: function () {
//         console.log('inside printWithDash', this);
        
//         setTimeout(function (){
//             console.log('inside setTimeout', this);
            
//         }, 3000);
//     }
// }

// nepal.printWithDash();

let nepal = {
    // add property
    mountains: ['Everest', 'Fish Tail', 'Annapurna'],
    //add method
    printWithDash: function () {
        setTimeout(() => {
            console.log(this.mountains.join(' - '));
        }, 3000);
    }
}

nepal.printWithDash();