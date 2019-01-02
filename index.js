function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector('input').value;
}

function addNewElementAsLi(){
  var empname = document.createElement('LI');
  empname.innerHTML = retrieveEmployeeInformation();
  $('employee-list').appendChild(empname);
}

function addNewLiOnClick(){
  document.querySelector('form').addEventListener('submit', addNewElementAsLi());
}
