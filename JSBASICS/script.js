/*
//decision making
var age=18;
if(age<18){
    console.log("minor");
}else if(age>18){
        console.log("major");
    }

//con?true:false
age>=18?console.log("major"):console.log("minor");
*/
/*
function nikitha(firstname,lastname){
    console.log(firstname+' '+lastname);
}
nikitha('mal','manju');
*/

//array
/*
var names=['nikitha','sadh','aish'];
console.log(name[2]);
console.log(name.length);

names.push("niharika");
names.unshift("rajesh");
names.pop();
console.log(names);

*/

//challenge:
var tip;
function calculator(amount){
    if(amount<50){
        tip=0.2*amount;
        return tip;
    }
    else if(amount>50 && amount<200){
        tip=0.15*amount;
        return tip;
    }
    else
     if(amount>200){
        tip=0.1*amount;
        return tip;
    }
}
var billamt=[calculator(124),calculator(48),calculator(268)];
console.log('Bill_amount='+billamt);
var finalamt=[billamt[0]+124,billamt[1]+48,billamt[2]+268];
console.log('Final amount='+finalamt);

    //objects
    var myDetails = {
        firstname:'nikitha',
        lastname:'bai',
        doB:1980,
        family:['nikitha','mal'],
        calcAge:function(birthYear){
            return 2019-birthYear;
        }
    };

        console.log(myDetails.firstname);
        var z='doB';
        console.log(myDetails[z]);

        myDetails.doB=1981;
        console.log(myDetails);

        //new object

        var shiva=new Object();
        shiva.firstname='mal';
        console.log(shiva);

        //
        console.log('nikitha is ' +myDetails.calcAge(1980)+' years old');
        


        

