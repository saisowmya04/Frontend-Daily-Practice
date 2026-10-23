let fnameTextBox=document.getElementById("fname");
let lnameTextBox=document.getElementById("lname");
let emailTextBox=document.getElementById("email");
let passwordTextBox=document.getElementById("password");
let cPasswordTextBox=document.getElementById("cPassword");
let numberTextBox=document.getElementById("number");

function registration(e){
    e.preventDefault();

    
    let fname=fnameTextBox.value;
    let lname=lnameTextBox.value;
    let email=emailTextBox.value;
    let password=passwordTextBox.value;
    let cPassword=cPasswordTextBox.value;
    let number=numberTextBox.value;

    

    // validation using regular expressions
    if(fname=="" || lname=="" || email=="" || password=="" || cPassword=="" || number==""){
        alert("Please fill all the details");
        return; //if we use if condition use return stmt
    }

    //regular expression for email
    let emailRegex=/^[a-z][a-z0-9.]{0,19}@gmail.com$/
    let emailResult=emailRegex.test(email);
    if(emailResult==false){
        alert("Please enter valid email");
        return;
    }

    //regular expression for password
    let passwordRegex=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,14}$/
    let passwordResult=passwordRegex.test(password);
    if(passwordResult==false){
        alert("Please enter valid password");
        return;
    }

    //checking the confirm password to password
    if(cPassword!=password){
        alert("password is not matching");
        return;
    }

    //regular expression for contact
    let numberRegex=/^[6789][0-9]{9}$/
    let numberResult=numberRegex.test(number);
    if(numberResult==false){
        alert("Please enter valid phone number");
        return;
    }

    let obj={
        fname:fname,
        lname:lname,
        email:email,
        password:password,
        number:number
    }

       
    let str=JSON.stringify(obj)
    localStorage.setItem("userObj",str)
    sessionStorage.setItem("userObj",str)

    alert("Registration Successfull!");
}