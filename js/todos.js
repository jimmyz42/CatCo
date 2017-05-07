
function sitterSide(item, action) {
	if (action=="add") {
		
	}
	if (action=="remove") {
		
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

//cat sitter side
var checkedItems = [];
if(window.sessionStorage.getItem('todo-items') !== null) {
	checkedItems = JSON.parse(window.sessionStorage.getItem('todo-items'));
}
$(function() {
	$('.todo-item').click(function() {
		var box = document.getElementById(id);
		if (box.checked==true) { checkedItems.push(item); }
		else { checkedItems.pop(item); }
		//checkedItems.push($(this).attr('id'));
		window.sessionStorage.setItem('todo-items', JSON.stringify(checkedItems));
	});
});