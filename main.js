//da vidimo kako funkcionise setTimeout i setInterval

//timeout
/*var x = setTimeout (run,2000);  //skloniti komentar da radi


function run () {

    document.write ('Hello <br>');   //tacno za dvije sekunde ce se pojaviti nasa rijec hello
}

*/


//interval

/*var x = setInterval (run1,2000);  //ovdje treba skloniti  komentar da radi

function run1 () {

    document.write ('Hello');   //svake dvije sekunde se ponavlja rijec i prikazivat ce se u nedogled

}
*/

//
/*var x = setInterval (run2,2000);  //skloniti komentar da radi
var i=0;

function run2 () {


    document.write ('<br>Hello');   
    i++;
    if(i>2) {
        clearInterval(x); //kada i bude vece od 2 prekinut ce se ponavljanje
    }

}
*/

// ovo je bilo samo objasnjenje


                         //semafor


 function semafor () {

  var boje = document.getElementsByClassName ('boje')

  boje[0].style.backgroundColor ="red";
  boje[1].style.backgroundColor ="gray";
  boje[2].style.backgroundColor ="gray";


  function zuta (){

    boje[1].style.backgroundColor ="yellow";



  }
 

  function zelena (){

    boje[0].style.backgroundColor ="gray";
    boje[1].style.backgroundColor ="gray";
    boje[2].style.backgroundColor ="green";



  }

  var x = setTimeout (zuta,5000); //samo jednom ce odraditi
  var y = setTimeout (zelena,7000);

  var s = setInterval (semafor,10000);



}

semafor ();
