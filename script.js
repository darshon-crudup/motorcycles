function username() {
    let username = prompt("Are you over 18");

    console.log("username", username);
    if (!username) {
        console.log("Do you have a license")
        username = prompt("Please confirm if you are 18 to 21 years old") + "!";

    }
    if (!username) {
        console.log("You must have a valid license to test drive")
        alert("Denied Access" + "!")
    }
    else {
        document.write("Approved, schedule your test drive today " + username + "!");
    }


function Darshon (){
let introduction = prompt('What\'s your name?')
document.write('Hello '+ introduction)
}

function motorcycle(){
let likesyamaha = confirm("Would you like to buy a motorcycle?")

if (likesyamaha ===true){
    document.write("Great, I think I found what your looking for!")
} else {
    document.write('Not cool')
}
}

function ducati(){
let likesducati = confirm("Do you like this 2022 Ducati Diavel?")

if (likesducati ===true){
    document.write("Would you like to purchase it for $1?")
} else{
    document.write('I don\'t believe you')
}
}

Darshon();
motorcycle();
ducati();
