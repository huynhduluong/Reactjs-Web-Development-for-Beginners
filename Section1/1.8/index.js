// let thingsToDo = {
//     morning: 'Exercise',
//     afternoon: 'Work',
//     evening: 'Code',
//     night: ['Sleep', 'Dream']
// }

// let {morning, afternoon} = thingsToDo;
// morning = 'Run';
// console.log(morning, '-', afternoon);

// let uniStudent = student => {
//     console.log(`${student.name} from ${student.university}`);
// }

// uniStudent({
//     name: 'Ryan',
//     university: 'University of Sydney'
// });

// let uniStudent = student => {
//     let {name, university} = student
//     console.log(`${name} from ${university}`);
// }

// uniStudent({
//     name: 'Ryan',
//     university: 'University of Sydney'
// });

let uniStudent = ({name, university}) => {
    console.log(`${name} from ${university}`);
}

uniStudent({
    name: 'Ryan',
    university: 'University of Sydney'
});


