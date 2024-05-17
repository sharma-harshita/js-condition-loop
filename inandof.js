let salary = [1000, 2000, 300, 4000]

for (let x in salary){
    console.log(x);
}


for (let x of salary){
    console.log(x);
}


let emp = {name: "john", dept: "HR", tel: 12455}

for (let val in emp){
    console.log(val, emp[val]);
}

for (let val of "students"){
    console.log(val);
}