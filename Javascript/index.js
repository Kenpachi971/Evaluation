
var arr = [["Javascript", "Ruby"], ["Php", "Html"], ["CSS","Python"]];
console.log(arr[2][0], arr[1][1], arr[0][0], arr[1][0], arr[2][1], arr[0][1]);
var NewTab = [arr[2][0], arr[1][1], arr[0][0], arr[1][0], arr[2][1], arr[0][1]];
console.log(NewTab);
document.getElementById("MaDiv").innerHTML="le résultat est " + NewTab + " voila";

/*/-----------------------/*/

var obj = { "guadeloupe": 971, "martinique": 972, "guyane": 973, "reunion": 974};
for(i in obj){
    document.getElementById("MaOtherDiv").innerHTML += obj[i] + "<br />";
    }
console.log(obj.guadeloupe, obj.martinique, obj.guyane, obj.reunion);

/*/-----------------------/*/

var Country = ["Japon", "Chine", "Asie", "Corée du Nord", "Corée du Sud"];
var Country2 = Country.push("Australie");
document.getElementById("MyOtherDiv").innerHTML="le résultat est " + Country + " voila";
console.log(Country);

/*/-----------------------/*/

var Country2 = ["Japon", "Chine", "Asie", "Corée du Nord", "Corée du Sud"];
var FirstCountry = Country2.shift();
document.getElementById("MyDiv").innerHTML="le résultat est " + Country2 + " voila";
console.log(Country2);

/*/-----------------------/*/


