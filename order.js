function validate()

{
    var meal name= document.getElementById("meal name").value
    var meal id= document.getElementById("meal id").value 
    var Quantity = document.getElementById("Quantity").value
    var Total price= document.getElementById("Total price").value

    checkmealname(meal name)
    checkmealid(meal id)
    checkquantity(Quantity)
    checktotal_price(Total price)
    
}

function checkmealname(meal name)
{
  if(username.length >8)
  {
      document.getElementById('username').classList. add('success')
      document.getElementById('username').classList. replace('error','success')
      document.getElementById('username_error').innerHTML=''
  }
 else
 {
     document.getElementById('username').classList.add('error')
     document.getElementById('username_error').innerText='enter a username with 8 letters'
 }

}

function checkemail(email)
{
  if(email.length >8 && email.include ('@gmail.com'))
  {
      document.getElementById('email').classList. add('success')
      document.getElementById('email').classList. replace('error','success')
      document.getElementById('email_error').innerHTML=''
  }
 else
 {
     document.getElementById('email').classList. add('error')
     document.getElementById('email_error').innerText='email must include @gmail.com and min length should be 8'
 }

}

function checkpassword(password)
{
  if(password.length >8 && username.include ('.'))
  {
      document.getElementById('password').classList. add('success')
      document.getElementById('password').classList. replace('error','success')
      document.getElementById('password_error').innerHTML=''
  }
 else
 {
     document.getElementById('password').classList.add('error')
     document.getElementById('password_error').innerText='min 8 charcters and should include .'
 }

}

function checkconfirmpassword(confirmpassword, password)
{
  if(confirmpassword==password && password != '')
  {
      document.getElementById('confirmpassword').classlist. add('success')
      document.getElementById('confirmpassword').classList. replace('error','success')
      document.getElementById('confirmpassword_error').innerHTML=''
  }
 else
 {
     document.getElementById('confirmpassword').classlist.add('error')
     document.getElementById('confirmpassword_error').innerText='passwords do not match'
 }

}
function display(value){
    document.getElementById("textarea").value+=value
}
function calculate(){
    var value=document.getElementById("textarea").value
    var answer=eval(value)
    document.getElementById("textarea").value=answer

}
