

      const db = null
      const registerForm = document.querySelector("#myform")

    


      const firstname = document.getElementById("first")
      const lastname = document.getElementById("last")
   
      const email = document.getElementById("email")
      const Password = document.getElementById('password')
      const PasswordVerify = document.getElementById('passwordverify')


      const firstnameInputError = document.querySelector('#FirstNameError')
      const lastnameInputError = document.querySelector('#LastNameError')
      const BirthInputError = document.querySelector('#BirthError')
      const EmailInputError = document.querySelector('#MailError')
      const PasswordInputError = document.querySelector('#PasswordError')

      const PasswordVerifyInputError = document.querySelector('#PasswordVerifyError')

   
      

    
    function validate(event)
    {
        let a = document.createElement('a')
        a.href = "index.html"

        a.click()


        event.preventDefault()
    }

    function InitForm()
    {
       firstname.setCustomValidity("")
       lastname.setCustomValidity("")
  
       email.setCustomValidity("")
       Password.setCustomValidity("")
       PasswordVerify.setCustomValidity("")
        
       firstname.addEventListener("keyup", function (event) {

            if (firstname.value.length >= 2) {
               
               firstnameInputError.style.display = "none"
            } else {
          
               firstnameInputError.style.display = "block"
            }
        })

       firstname.oninvalid = function (e) {
            if (firstname.value.length >= 2) {
            
               firstnameInputError.style.display = "none"
            } else {
               
               firstnameInputError.style.display = "block"
            }
        }

       lastname.oninvalid = function (e) {
            if (firstname.value.length >= 2) {
              
               lastnameInputError.style.display = "none"
            } else {
             
               lastnameInputError.style.display = "block"
            }
        }

       lastname.addEventListener("keyup", function (event) {
        
            if (lastname.value.length >= 2) {
               lastnameInputError.style.display = "none"

            } else {
               lastnameInputError.style.display = "block"
                
            }
        })

        email.addEventListener("keyup", function (event) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
              EmailInputError.style.display = "none";
              //lastname.setCustomValidity("");
            } else {
              EmailInputError.style.display = "block";
            }
          })

       PasswordVerify.addEventListener("keyup", function (event) {
        
            if (PasswordVerify.value ==Password.value) {
               PasswordVerifyInputError.style.display = "none"
         
            } else {
               PasswordVerifyInputError.style.display = "block"
   
            }
        });
    }

    registerForm.addEventListener('submit', (event) => validate(event));

    InitForm()