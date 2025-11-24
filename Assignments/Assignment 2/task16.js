function placeOrder(callback){
    setTimeout (() => {
        console.log("Order Placed.");
        callback();
    },2000);
}
function cookFood(callback){
     setTimeout (() => {
        console.log("Food cooking.");
        callback();
    },3000);
}
function deliverFood(){
     setTimeout (() => {
        console.log("Food delivered.");
    },1000);
}

placeOrder(() => {
    cookFood(() => {
        deliverFood();
    });
});