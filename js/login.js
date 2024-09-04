 document.getElementById('submit-buttton').addEventListener('click',function(){
    const userInput=document.getElementById('user-email')
    const userEmail=userInput.value
console.log(userEmail);


   const inputPassword= document.getElementById('user-password')
    const userPassword=inputPassword.value
    console.log(userPassword);



    if(userEmail=='admin@gmail.com'&&userPassword=='123456'){

alert("Login Successful");
window.location.href = "./banking.html";
  }
  else if(userEmail !='admin@gmail.com'||userPassword !='123456')
  {
    alert("username or password is not valid")
  }



    


    
    
 })
 

 