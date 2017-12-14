var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var mouseApretado = false;
var $pixelsGrid = ('#grilla-pixeles');
var $colorPersonalizado = $('#color-personalizado');
var $palette = $('#paleta');
var valorColorPersonalizado = $colorPersonalizado.val();
var $colourOfIndicator = $('#indicador-de-color');
var $colourOfIndicatorMessage = $('#indicador-de-color-mensaje');

var $save = $('#guardar');
var $deshacer = $('#borrar');

function cambiarIndicadorDePincel(color){
  $colourOfIndicator.css('background-color', color);
  $colourOfIndicatorMessage.text('pincel: ${color}');
}
//Armar paleta de colores para ser utilizados luego al pintar cada pixel//
function paletteGenerator(){
  for (var nombreColor of nombreColores) {
      var $swatch = $('<div/>', {"class": 'color-paleta'});
      $palette.append($swatch);
      $swatch.css('background-color', nombreColor);
    }
};
//armado de grilla para ser recorrida mediante el bucle for//
function pixelsOfGrid(){
  for(pix=0 ; pix < 1749; pix++){
    var $pixel = ('<div/>');
    $pixelsGrid.append($pixel);
  }
};

function eleccionDeColor(event){
  colorActual = $(event.target).css('background-color');
  cambiarIndicadorDePincel(colorActual);
}

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
cambiarIndicadorDePincel(colorActual);
});

function apretarMouse(){
  mouseApretado=true;
}

function soltarMouse(){
  mouseApretado=false;
}

paletteGenerator();
pixelsOfGrid();
