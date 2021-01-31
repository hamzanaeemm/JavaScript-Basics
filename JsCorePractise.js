    function myFunction(){
    document.getElementById("para3").innerHTML= document.getElementById("para3").innerHTML + " I am Awesome";
    }
    /////////////


    var x = 3 + 3 + "5";
    document.getElementById('para4').innerHTML= x;
    /////////////


    var x= {firstName:"Hamza" , lastName:"Khan"};
    console.log(x.firstName + " " + "" + x.lastName);
    /////////////


    var person = {firstName: "Hamza ", lastName:"Khan ", age:50, eyeColor: "Blue."};
    document.getElementById("para5").innerHTML= person.firstName + "is " + person.age + " years old." + " His eye color is " + person.eyeColor;
    /////////////


    // alert(typeof "hamza");
    var car="Honda";
    var Model="2019"
    document.getElementById("para6").innerHTML="I have a "+car+ " " +Model; 
    /////////////


    var house="20 kannal"
    house = null;
    console.log(typeof house);
    /////////////


    document.getElementById("para7").innerHTML = typeof undefined + "<br>" + typeof null + "<br><br>" + (null === undefined) + "<br>" + (null == undefined);
    /////////////


    console.log(typeof function myFunc(){});
    /////////////


    function mulFunc(p1, p2){
        return p1*p2;
    }
    document.getElementById("para8").innerHTML=mulFunc(2,5);
    /////////////


    function mulFunc(p1, p2){
        return p1*p2;
    }
    var x=mulFunc(2,3)
    document.getElementById("para9").innerHTML=x;
    ////////////////

   
    document.getElementById("btn1").onclick = function(){
     var   fahrebeit = document.getElementById("inp1").value;
     var   toCelcius = (fahrebeit-32) * (5/9).toFixed(2);
        alert(toCelcius + " Celcius");
    }
    ////////////////


    var car = {
        Name: "Civic",
        color: "Black",
        Model:  "2019",
        Engine: "V2.0",
        MakeYear:   "2020",
        Company:    " Honda",
        Detail: function(){
            return "The Details are: " + this.Company + " " + this.Name + " " + this.Engine + " " + this.Model + " " + this.color;
        }


    };
    document.getElementById("para10").innerHTML=car.Detail();
    ////////////////

    var moselwise = ["Hamza","DaniBoy","Neshabil","Mushahid","Harsh",];
    console.log(moselwise[0]);
    ////////////////


    var fruit, flen, i, list;
    fruit = ["banana","apple","orange"]
    flen=fruit.length;

    text= "<ul>"
            fruit.forEach(uol);
            text+="</ul>"
            
    document.getElementById("para11").innerHTML=text;

    function uol(value){
               
                    text+="<li>" + value + "</li>";
              
            }
    ////////////////
    