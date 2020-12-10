//to-do applikáció készítés alapértelmezésben 10 üres mező áll rendelkezésre de hozzá tudunk adni ujjakat és minden mezőben van egy checkbox ahol bepipálhatjuk hogy kész van e a feladat és van egy text input mezőnka ahova beirhatjuk a feladatleírást és egy törlés gombunk és hozzá is tudunk adni
function pageLoad(){ 
// létre kell hoznom egy változót amibe belerakom a rootot
  let rootA = document.getElementById("root");


  //el kell tárolnunk egy változóban a sorok számát majd el kéne menteni a változóba egy sort is amibe kelleni fog egy div/checkbox/button ebből fog állni egy sor amit duplikálni fogunk 

  let crtDo = 10;
  let row = `
    <div class ="do">
      <input type="checkbox">
      <input type = "text">
      <button class="delete">Delete</button>
    </div>
  `;

  //amit készítettünk azt most duplikáljuk 10x a forciklusba insert.adjastmentHTMLel hozzáadjuk a sorokat
  for (let index = 0; index < crtDo; index++) {
      rootA.insertAdjacentHTML("beforeend",row);
  }
  console.log(rootA);

  //(afterend)rooton kívül kell egy gomb a végére amivel még hozzá tudunk adni 1et a végére (div mezőt) 
  rootA.insertAdjacentHTML("afterend",`
  <button id="add">New row</button>
  `);


  //ehhez a gombhoz egy click eseményt hozzáadni 
  document.getElementById("add").addEventListener("click",nrow);
  function nrow(){
    rootA.insertAdjacentHTML("beforeend",row); 

     //TODO: rá kéne tenni az eseményfigyelőt az ujjonan hozzáadott sorokra is. ami az 51.sorba van!!!
  }


  //queryselector(all) classnév alapján kijelölöm az összes törlés gombot és elmentem egy változóba.
  let dbuttons = rootA.querySelectorAll(".delete");
  console.log(dbuttons);

  //for ciklus ráadni mindre egy click eseményt.hogyan fogom kijelölni azt az elemet amit majd ki szeretnék törölni?? forduljunk itt már mentorhoz ha nem tudjuk.
  function removeItem(e){
    console.log(e);
    console.log(e.target);
    e.target.parentElement.remove(); //elkaptuk azt az elemet amire kattintottunk

  }
  for (let index = 0; index < dbuttons.length; index++) {
   dbuttons[index].addEventListener("click",removeItem);
  } 
  
  


}
window.addEventListener("load",pageLoad);