
function newRow(id) {
    // we will get the parent div in the form
	var div_box = document.getElementById('div-box');
	//we will get the of the first child div 
	var div_row = id.parentNode;
	/* we will make a copy from it 
	the value is true to get all elements included in this div */
	var div_new = div_row.cloneNode(true);
    // to set the new id for the div
	var new_id =  "row"+(id+=1);
   // change the old id by the new one 
	div_new.setAttribute("id" , new_id);
     
    // append the new div to the parent div
	 div_box.appendChild(div_new);
     
	var deleteList = div_box.getElementsByClassName("button-delete");
	var display = "none";
    //if the delete button not found in the first child div make it available
	if (deleteList.length>1){
		display ="";
	}
   // this condition to check if it's not found in first div to make it available 
	for ( i =0 ; i<deleteList.length; i++) {

		deleteList[i].style.display=display;
	}
	
	var addList = div_box.getElementsByClassName("button-new");
	// make new button available until the if condition become true 
	var display = "";
	// this for making the add button not availble when the no of new button become > 10
	if(addList.length>10){
		addList[10].style.display ="none";
	}
    for ( i =9 ; i>addList.length; i++) {

		addList[i].style.display=none;
	}
}

//----------------------------------------------------------------------------------
function deleteRow(id){
    // we will get the parent div in the form
	var div_box = document.getElementById("div-box");
	//we will get the of the first child div 
	var div_row = id.parentNode;
   
	div_box.removeChild(div_row);
	var deleteList = div_box.getElementsByClassName("button-delete");
   // this for making delet button not available at first div
	if(deleteList.length<2){
		deleteList[0].style.display ="none";
	}

}