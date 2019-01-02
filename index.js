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
  var text = document.createTextNode(retrieveEmployeeInformation);
  empname.appendChild(text);
  document.getElementsByClassName("employee-list").appendChild(empname);
}
