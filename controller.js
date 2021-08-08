

 function AddEntry(){
    var tabl = document.getElementById("tabl")
    
    var exptd=document.getElementById("name"); 
    
    var datetd = document.getElementById("date");
   
    var amounttd = document.getElementById("amount");
    

    const entry = [exptd.value, datetd.value, amounttd.value];
    
    var row = tabl.insertRow(1);
    var cell1 =row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = exptd.value;
    cell2.innerHTML= amounttd.value;
    cell3.innerHTML= datetd.value;

    exptd.value = "", amounttd.value = "", datetd.value = ""
    
    

}
   

function calculate_total(){
 var tabl = document.getElementById("tabl")
 
// LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
 for (i = 1; i < tabl.rows.length; i++){

    // GET THE CELLS COLLECTION OF THE CURRENT ROW.
     var objCells = tabl.rows.item(i).cells;

     // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
 
      var exps = [objCells.item(1).innerHTML];
 
           for (j = 0, j < exps.length, j++) {
         totalamt = exps.reduce(getSum, 0);

         function getSum (total, num){
             return total + Math.round(num);
         }
     }

     
     
     
    //   totalamt = totalamt + '<br/>'
 }
 var total = document.getElementById("total")
    total.innerHTML = "Total Amount = " + totalamt
    
}