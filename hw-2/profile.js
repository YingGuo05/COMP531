//use following values as hardcoded personal information
var name = "YingGuo";
var email = "yg45@rice.edu";
var phone = "123-123-1234";
var zipcode = "77030";
var password = "123456";
var passwordconfirm = "123456";

var displayname = document.getElementById("displayname");
var emailaddress = document.getElementById("email");
var phonenumber = document.getElementById("phone");
var zipCode = document.getElementById("zipcode");
var passWord = document.getElementById("password");
var passWordConfirm = document.getElementById("passwordConfirm");

var showname = document.getElementById("displayName");
var showemail = document.getElementById("emailAddress");
var showphone = document.getElementById("phoneNumber");
var showzip = document.getElementById("zipCode");
var showpw = document.getElementById("passWord");
var showpwc = document.getElementById("passWordConfirm");

showname.innerHTML = name;
showemail.innerHTML = email;
showphone.innerHTML = phone;
showzip.innerHTML = zipcode;
showpw.innerHTML = password;
showpwc.innerHTML = passwordconfirm;

function redirect(){
    window.location ="main.html";//link to main page
}

function changeInfo(showinfo,origin,current,remindinfo){
    if(remindinfo != "")
        document.getElementById(remindinfo).innerHTML = "You change "+remindinfo+" "+origin+" to "+current.value+"<br>";//remind user of updated info
    showinfo.innerHTML = current.value;//display new input info
}

/* this update() function will only update value when it is not the same as old value and it is qualified. So if it is the same as old value, it will have no update info because there is no difference between new typed in value and old one */
function update(){
    if(displayname.value != name && displayname.value != ""){
        if(checkname(displayname)){
            changeInfo(showname,name,displayname,"Name");
            name = displayname.value; 
        }  
    }
    else{
        document.getElementById("Name").innerHTML = "";// no update, clear remind info
    }
    if(emailaddress.value != email && emailaddress.value != ""){
        if(checkemail(emailaddress)){
            changeInfo(showemail,email,emailaddress,"Email");
            email = emailaddress.value;
        }
    }
    else{
        document.getElementById("Email").innerHTML = "";
    }
    if(phonenumber.value != phone && phonenumber.value != ""){
        if(checkphone(phonenumber)){
            changeInfo(showphone,phone,phonenumber,"Phone");
            phone = phonenumber.value;
        }
    }
    else{
        document.getElementById("Phone").innerHTML = "";
    }
    if(zipCode.value != zipcode && zipCode.value != ""){
        if(checkzip(zipCode)){
            changeInfo(showzip,zipcode,zipCode,"Zipcode");
            zipcode = zipCode.value;
        }
    }
    else{
        document.getElementById("Zipcode").innerHTML = "";
    }
    if((passWord.value != password && passWord.value != "") || passWordConfirm.value != ""){
        if(checkpw(passWord,passWordConfirm)){
            changeInfo(showpw,password,passWord,"Password");
            changeInfo(showpwc,passwordconfirm,passWordConfirm,"");
            password = passWord.value;
            passwordconfirm = passWordConfirm.value;
        }
    }
    else{
        document.getElementById("Password").innerHTML = "";
    }
    // clear up the input area
    displayname.value = "";
    emailaddress.value = "";
    phonenumber.value = "";
    zipCode.value = "";
    passWord.value = "";
    passWordConfirm.value = "";
}

//check the input name is qualified or not
function checkname(inputname){
    if(!inputname.value.match(/^([a-zA-Z]{1})([a-zA-Z0-9])*$/)){
        document.getElementById("Name").innerHTML = "Account name can only be upper or lower case letters and numbers, but may not start with a number"+"<br>";
        inputname.value = "";
        return false;
    }
    else 
        return true;
}

//check the email is correct or not
function checkemail(inputemail){
    if(!inputemail.value.match(/^([a-zA-Z0-9\_\-\.])+@([a-zA-Z0-9\_\-])+((\.[a-zA-Z0-9]{2,4}){1,2})$/)){
        document.getElementById("Email").innerHTML = "Invalid email address"+"<br>";
        inputemail.value = "";
        return false;
    }
    else
        return true;
}

//check the input phone number
function checkphone(inputphone){
    if(!inputphone.value.match(/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/)){
        document.getElementById("Phone").innerHTML = "Phone Number should be in pattern like XXX-XXX-XXXX"+"<br>";
        inputphone.value = "";
        return false;
    }
    else
        return true;
}

// check the zipcode, it should be 5 numbers
function checkzip(inputzip){
    if(!inputzip.value.match(/^([0-9]{5})$/)){
        document.getElementById("Zipcode").innerHTML = "Zipcode should be consisted of 5 numbers"+"<br>";
        inputzip.value = "";
        return false;
    }
    else
        return true;
}

//check the password and password confirm
function checkpw(inputpw,inputpwc){
    if(inputpw.value != inputpwc.value){
        document.getElementById("Password").innerHTML = "Please check passward you type in. The password is not equal to password confirm."+"<br>";
        inputpw.value = "";
        inputpwc.value = "";
        return false;
    }
    else
        return true;
}