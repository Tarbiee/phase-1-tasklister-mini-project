document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks')
  form.addEventListener('submit', (e) => {
    e.preventDefault();//set target to default
    const valueInput = document.querySelector('#new-task-description').value;//get valueof target
    const listItem = document.createElement('li');
    listItem.textContent = valueInput;

    const button = document.createElement('button')
    button.textContent = 'x'
    button.addEventListener('click',(e)=>{
      listItem.remove();
    });


listItem.appendChild(button);
taskList.appendChild(listItem);
form.reset();


  });
  // your code here
});

