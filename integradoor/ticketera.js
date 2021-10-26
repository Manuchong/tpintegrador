//var=ticket 200
//var= valorTotal()=ticket(200)*cantidad-desc(category)
//var=s(ge

 //id=category(i)   

// function calcularTotal(){
//    var qty=document.getElementById("qty").value*1;
//    var cat=document.getElementById("categorySelect").value*1;
//    var discount=cat>0?(cat/100)*valorTicket:0;
//    var final=valorTicket-discount;
//
//    let textTitle="";
//    let textTotal="";
//
//    setActiveCard(cat);
//
//    //if(!qty>0){return null;}
//
//    textTotal='$ ' + qty*final + ' ('+ qty +' X $'+ final +') ';
//    }
//    
//    document.getElementById("discountTitle").innerHTML=textTitle;
//    if(qty<=0){return null;}
//    document.getElementById("totalAPagar").innerHTML=textTotal;
//
//    return final*qty;
//}

var Total = 0;
const StudentDiscount = 0.8;
const TraineeDiscount = 0.5;
const JuniorDiscount = 0.15;
const RegularPrice = 200;

function precioFinal()
{
    var Tickets = document.getElementById("cantidad").value;
    var temp = document.getElementById("categoria");
    var Category = temp.options[temp.selectedIndex].value;

    switch (Category)
    {
        case ("3"):
        {
            Discount = StudentDiscount;
            break;
        }
        case ("2"):
        {
            Discount = TraineeDiscount;
            break;
        }
        case ("1"):
        {
            Discount = JuniorDiscount;
            break;
        }
        default:
        {
            Discount = 0.0;
            break;
        }
    }

    Total = (RegularPrice - (RegularPrice * Discount)) * Tickets
   document.getElementById ("ImporteAPagar",).innerHTML = Total +` (No olvides la documentación🐭)`;

}