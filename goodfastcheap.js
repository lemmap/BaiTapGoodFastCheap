function balance() {
    let good=document.getElementById("checkbox1");
    let fast=document.getElementById("checkbox2");
    let cheap=document.getElementById("checkbox3");
   // if(statusGood.checked&&statusFast.checked) {
   //     if (statusCheap.checked) {
   //         check("checkbox3");
   //     }
   // }
   //  if(statusFast.checked&&statusCheap.checked) {
   //      if (statusGood.checked) {
   //          check("checkbox1");
   //      }
   //  }
   //  if(statusGood.checked&&statusCheap.checked) {
   //      if (statusFast.checked) {
   //          check("checkbox2");
   //      }
   //  }
    if (good.checked) {
        if (fast.checked){
            if (cheap.checked){
                check("checkbox3")
            }
        }
    }
    if (fast.checked) {
        if (cheap.checked){
            if (good.checked){
                check("checkbox1")
            }
        }
    }
    if (cheap.checked){
        if (good.checked){
            if (fast.checked){
                check("checkbox2")
            }
        }
    }


}
function check(id){
    document.getElementById(id).click();
}
