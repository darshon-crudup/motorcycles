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
