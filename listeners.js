function eventListeners(){
    const budgetForm = document.getElementById('budget-form');
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
  
    const ui = new UI()
     

    budgetForm.addEventListener('submit',function(event){
    event.preventDefault();
    ui.submitBudgetForm();
    })
    

    expenseForm.addEventListener('submit',function(event){
        event.preventDefault();
        ui.submitExpenseForm();
    })
    
    
 
    expenseList.addEventListener('click',function(event){
        if(event.target.parentElement.classList.contains('edit-icon')) {
          ui.editExpense(event.target.parentElement);
        } 
        else if(event.target.parentElement.classList.contains('delete-icon')){
          ui.deleteExpense(event.target.parentElement);
        }
        });
    
      }
    
      document.addEventListener('DOMContentLoaded', function(){
          eventListeners();
      }) 