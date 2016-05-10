// $(function () {
var brick;
brick = "<div class='brick small'><div class='delete'>&times;</div></div>";

function allowDrop(event) {
	//console.log("allowDrop");
	event.preventDefault();
}

function drag(event) {
	//console.log("ondragstart");
	event.dataTransfer.setData("Text", event.target.id);
}

function drop(event) {
	//console.log("drop");
	event.preventDefault();
	var data = event.dataTransfer.getData("Text");
	//console.log(data);

	var brick;
	//brick = "<div class='brick small'> <div><p id='status'>Waiting for input</p></div><div><p id='mmmmmm'>实时天气:</p></div><img id='wether01' class='aaa' src='" + data + "' /><div class='delete'>&times;</div></div>";
	brick = "<div class='brick small'><a class='delete' href='#'>&times;</a></div>";
	$('.gridly').append(brick);

	return $('.gridly').gridly();
	//event.target.appendChild(document.getElementById(data));
}
//draggable="true" ondragstart="drag(event)"
// $('.dragicon').attr('draggable', true);
// // $('.dragicon').bind('ondragstart', drag);

// $(document).on("ondragstart", ".dragicon", drag);

// //    <div class="content" ondrop="drop(event)" ondragover="allowDrop(event)">
// $('.admin-content').addClass('drophere');
// $('.drophere').bind('ondrop', drop);
// $('.drophere').bind('ondragover', allowDrop);
// });
