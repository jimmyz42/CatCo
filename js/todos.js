var checkedItems = [];
function sitterSide(item, action) {
	if (action=="add") {
		checkedItems.push(item);
	}
	if (action=="remove") {
		checkedItem.remove(item);
	}
	console.log(checkedItems);
}

function ownerSide() {
	console.log(checkedItems);
	for (i=0; i < checkedItems.length; i++) {
		document.getElementById(checkedItems[i]).checked = true;
	}
}

function clicked(id)
		{
		  console.log('inside clicked');
		  var box = document.getElementById(id);
		  if (box.checked==true) { sitterSide(id, 'add'); }
		  else { sitterSide(id, 'remove'); }
		}