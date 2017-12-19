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

var $colorPersonalizado = $('#color-personalizado');
var $indicadorDeColor = $('#indicador-de-color');
var $grillaDePixeles = $('#grilla-pixeles');
var valorColorPersonalizado = $colorPersonalizado.val();
var mouseApretado = false;
var $palette = $('#paleta');
var $indicadorColorDeMensaje = $('#indicador-de-color-mensaje');
var $borrar= $('#borrar');

function cambiandoIndicadoresDePincel(color){
  $indicadorDeColor.css('background-color', color);
  $indicadorColorMensaje.text(`Pincel: ${color}`);
;
//Armar paleta de colores para ser utilizados luego al pintar cada pixel//
function armadoDePaleta(){
  for (var nombreColor of nombreColores) {
      var $swatch = $('<div/>', {"class": 'color-paleta'});
      $palette.append($swatch);
      $swatch.css('background-color', nombreColor);
    }
};
//armado de grilla para ser recorrida mediante el bucle for//
function armadoDeGrilla(){
  for(var i = 0 ; i < 1749; i ++){
    var $pixel = ('<div />');
    $grillaDePixeles.append($pixel);
  }
};

function eleccionDeColor(event){
  colorActual = $(event.target).css('background-color');
  cambiandoIndicadoresDePincel(colorActual);
};

function pintandoPixeles(event){
  colorActual = $indicadorDeColor.css('background-color');
  $(event.target).css('background-color', colorActual);
};

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  colorActual = $colorPersonalizado.val();
  cambiandoIndicadoresDePincel(colorActual);
});

function apretarMouse(){
  mouseApretado=true;
};

function soltarMouse(){
  mouseApretado=false;
};
function pintandoEnMovimiento(event){
  if (mouseApretado) {
    pintandoPixeles(event);
  }
};

function desvanecer(){   //se "borra" lo que hemos pintado. vuelve a blanco
  $pixeles = $( "#grilla-pixeles div" )
  $pixeles.each(function() {
    $( this ).animate({ "backgroundColor": "white"}, 1000 );
  });
}
$('#batman').click( function(){
  cargarSuperheroe(batman);
});
$('#wonder').click( function(){
  cargarSuperheroe(wonder);
});
$('#flash').click( function(){
  cargarSuperheroe(flash);
});
$('#invisible').click( function(){
  cargarSuperheroe(invisible);
});
$('#guardar').click( function(){
  guardarPixelArt();
});

$grillaDePixeles.mousedown(apretarMouse);
$grillaDePixeles.mousemove(pintandoEnMovimiento);
$(window).mouseup(soltarMouse);
$palette.click(eleccionDeColor);
$grillaDePixeles.click(pintandoPixeles);
armadoDePaleta();
armadoDeGrilla();
$colorPersonalizado.change();
$borrarTodo.click();
