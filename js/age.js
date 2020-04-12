function setAge() {
    const dateOB = 12;
    const month = 3;
    const year = 1996;
    const date = new Date();
    //If you are born on 29th feb, tough

    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tens = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const specials = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    var age = (((date.getMonth()+1)>month) || ((date.getMonth()+1)==month && date.getDate()>=dateOB))?(date.getFullYear() - year):(date.getFullYear() - year - 1);
    var textAge = "";

    if(age>=100)
        textAge = "hundred ";

    if((age%100)<10){
        textAge += ones[age];
        textAge += " ";
    }else if((age%100)>=10 && (age%100)<20){
        textAge += specials[(age%100)-10]; 
        textAge += " ";
    }else{
        textAge += tens[((age%100)-(age%10))/10];
        textAge += " ";
        textAge += ones[age%10]
        textAge += " ";
    }

    textAge += "years"
    document.getElementById("age").innerHTML = textAge;
    
}

window.onload = setAge;