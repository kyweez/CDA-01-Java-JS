let date = new Date();
let date2 = new Date('2030-04-28')

console.log(`\n#####################################\n`);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(`\n#####################################\n`);
console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(date2.getDate());
console.log(`\n#####################################\n`);
console.log(date.getFullYear() - date2.getFullYear());
console.log(date.getMonth() - date2.getMonth());
console.log(date.getDate() - date2.getDate());

if