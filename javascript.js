function length(arr) {

  return  Math.floor(Math.random() * arr.length);
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
       
        document.querySelector('#quote1').innerHTML = "<h3>" + who[rand]+ "</h3>" ;
        document.querySelector('#quote2').innerHTML = "<h3>" +action[rand]+ "</h3>" ;
        document.querySelector('#quote3').innerHTML = "<h4>" +what[rand1]+ "</h4>" ;
        document.querySelector('#quote4').innerHTML = "<h4>" +when[rand2]+ "</h4>" ;
        document.querySelector("#myImage").src =  picture[rand];
        

}
