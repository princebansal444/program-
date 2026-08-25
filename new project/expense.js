let balance= document.getElementById("balance");



let expenseName = document.getElementById("expenseName");



let expenseAmount = document.getElementById("expenseAmount");


let addbutton = document.getElementById("addExpense");
addbutton.addEventListener("click", addExpense);


let remainingBalance = document.getElementById("remainingBalance");

let expenseList = document.getElementById("expenseList");


let expense =[];
function addExpense(){
    let name = expenseName.value;
    let amount = parseFloat(expenseAmount.value);
    expense.push({name, amount});
    updateExpenseList();
    updateremainigbalance();
    
}
function updateremainigbalance(){
    let remaining = balance.value-expenseAmount.value;

}
let crtBalance=0;


balance.addEventListener("input", function(){
    crtBalance = parseFloat(balance.value);
});
