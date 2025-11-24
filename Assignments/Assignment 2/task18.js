function startExam(callback){
    setTimeout(() => {
        console.log("Exam started");
        callback();
    },2000);
}

function evaluateExam(callback){
    setTimeout(() => {
        console.log("Evaluating answers");
        callback();
    },3000);
}

function declareResult(){
    setTimeout(() => {
        console.log("Result declared");
    },2000);
}

startExam(() => {
    evaluateExam(() => {
        declareResult();
    })
})