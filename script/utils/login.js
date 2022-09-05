const LoginForm = document.querySelector("#myform")
const email = document.getElementById("email")


    
function validate(event)
{
  
    //find user in db 

    //if user in db so connect it


    //else redirect to register 

    //there is no backend so :) 



    let a = document.createElement('a')
    a.href = "index.html"

    a.click()
    
    event.preventDefault()


  
}

function initForm()
{
    email.addEventListener("keyup", function (event) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
          EmailInputError.style.display = "none";
          //lastname.setCustomValidity("");
        } else {
          EmailInputError.style.display = "block";
        }
      })
}

LoginForm.addEventListener('submit', (event) => validate(event));

InitForm()