const arr= ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const newarray=arr.map(fruits =>{
    if(fruits!=' ') return fruits;
    else return 'empty string'
});

console.log(newarray);

