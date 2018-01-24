
var color = "#0058e8"; //Default color of the picker

$("#colorPicker").on('change', function() {
  color = $(this).val();
});

//Get form inputs with get method and create an object
function getInputs(){
  const url = document.URL;
  let obj = {};
  obj.height = parseInt(url.split('?')[1].split('&')[0].split('=')[1]);
  obj.width = parseInt(url.split('?')[1].split('&')[1].split('=')[1]);
  $("#input_height").val(obj.height);
  $("#input_width").val(obj.width);
  console.log(obj);
  return obj;
}

//Create a dynamic table based on the user inputs
function makeGrid() {
  const width = getInputs().width;
  const height = getInputs().height;
  let designCanvas = "";
  for(let row = 0; row < width; row++){
    designCanvas += "<tr>";
    for(let column = 0; column < height; column++){
      designCanvas += "<td></td>";
    }
    designCanvas += "</tr>";
  }
  let table = $("#pixel_canvas").append(designCanvas);
}
//Add event listener to the submit button
$("input[type=submit]").on("click", makeGrid());

//Add event listener to the mouse actions
$('td').bind('mouseenter mouseleave mousedown', function(event){
    if(event.type === 'mouseenter'){
        $(this).css("background-color", color);
    } else if(event.type === 'mousedown'){
        $(this).css("background-color", color);
        $(this).off("mouseleave");
    }
    else if(event.type === 'mouseleave'){
        $(this).css("background-color", "transparent");
    }
})
