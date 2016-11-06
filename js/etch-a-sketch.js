$(document).ready(function(){
    blackAndWhiteButton();
    rainbowButton();
});

function createGrid(x, y) {
  var rowHeight = '' + (1 / x * 100) + '%';
  var boxWidth = '' + (1 / y * 100) + '%';
  for (var row = 0; row < x; row++) {
    $('<div class="row"></div>').appendTo('#grid').css({height: rowHeight}).attr('id', row);
    var currentRow = $('.row#' + row);
    for (var box = 1; box <= y; box++) {
      var currentPosition = (y * row) + box;
      $('<div class="gridbox"></div>').appendTo(currentRow).css({width: boxWidth});
    }
  }
}

function makeRandomColor() {
  $('.gridbox').mouseenter(function(){
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    $(this).css({backgroundColor: randomColor});
  });
}

function turnBlack() {
  $('.gridbox').mouseenter(function(){
    $(this).css({backgroundColor: 'black'});
  });
}



function blackAndWhiteButton() {
  $('#BW').click(function() {
    $('#grid').remove();
    $('<div id="grid"></div>').appendTo('section');
    var dimension = prompt("Enter dimension of grid (Default: 16)", "16");
    createGrid(dimension, dimension);
    turnBlack();
  });
}

function rainbowButton() {
  $('#rainbow').click(function() {
    $('#grid').remove();
    $('<div id="grid"></div>').appendTo('section');
    var dimension = prompt("Enter dimension of grid (Default: 16)", "16");
    createGrid(dimension, dimension);
    makeRandomColor();
  });
}
