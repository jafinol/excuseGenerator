function length(arr) {

  return  Math.floor(Math.random() * arr.length);;   // The function returns the product of p1 and p2
}

function myFunction() {

        let who = ['The dog','My grandma','His turtle','My bird'];
        let action = ['ate','peed','crushed','broke'];
        let what = ['my homework', 'the keys', 'the car'];
        let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
        let picture = ['p1.png','p2.png','p3.png','p4.png'];

        var rand = length(who);
        var rand1 = length(what);
        var rand2 = length(when);
       
        document.getElementById('quote1').innerHTML = "<h3>" + who[rand]+ "</h3>" ;
        document.getElementById('quote2').innerHTML = action[rand];
        document.getElementById('quote3').innerHTML = what[rand1];
        document.getElementById('quote4').innerHTML = when[rand2];
        document.getElementById("myImage").src =  picture[rand];
        

}
