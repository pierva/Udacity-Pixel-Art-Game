
// When size is submitted by the user, call makeGrid()
var color = "#0058e8";

// function getColor(){
//   var color = document.getElementById('colorPicker').value;
//   console.log(color);
//   return color;
// }
$("#colorPicker").on('change', function() {
  color = $(this).val();
});

function getInputs(){
  const url = document.URL;
  let obj = {};
  obj.height = parseInt(url.split('?')[1].split('&')[0].split('=')[1]);
  obj.width = parseInt(url.split('?')[1].split('&')[1].split('=')[1]);
  $("#input_height").val(obj.height);
  $("#input_width").val(obj.width);
  return obj;
}

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

$("input[type=submit]").on("click", makeGrid());

// $('td').hover(function(){
//     $(this).css("background-color", color);
//     }, function() {
//     $(this).css("background-color", "transparent");
//     });

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
