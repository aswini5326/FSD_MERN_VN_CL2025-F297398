let mark = 80;
let age = 19;

if(mark>=90 && mark<=100){
    console.log("Grade: A");
}
else if(mark>=70 && mark<90){
    console.log("Grade: B");
}
else if(mark>=50 && mark<70){
    console.log("Grade: C");
}
else{
    console.log("Grade: F")
}

let age_status =  age>=18 ? "Adult" : "Minor";
console.log(age_status);
