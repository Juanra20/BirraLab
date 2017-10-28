var myvids = [];
var valid = [];
var myvid = document.getElementById('myvideo');
var activeVideo = 0;

function play(){
  myvid.addEventListener('ended', addVideos);
}

function addVideos(e){
  if(activeVideo+1 === myvids.length){
    myvid.removeEventListener('ended', addVideos)
  }
  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
  // update the new active video index
  activeVideo = (++activeVideo);
}

function macerar(){
  myvids.push("videos/maceracion.mp4");
  valid.push(1);
  appendInstruction("Macerar");
}
function hervir(){ 
  myvids.push("videos/hervor.mp4");
  valid.push(2);
  appendInstruction("Hervir");
}
function enfriar(){
  myvids.push("videos/enfriado.mp4");
  valid.push(3);
  appendInstruction("Enfriar");
}
function fermentar(){
  myvids.push("videos/fermentacion.mp4");
  valid.push(4);
  appendInstruction("Fermentar");
}
function madurar(){
  myvids.push("videos/maduracion.mp4");
  valid.push(5);
  appendInstruction("Madurar");
}
function embotellar(){
  myvids.push("videos/embotellamiento.mp4");
  valid.push(6);
  appendInstruction("Embotellar");
}

function check(){
  for(var i=0;i<6;++i){
    if(valid[i] != i+1){
      myvids.push("videos/wrong.mp4");
      break;
    }
  }
}

function appendInstruction(text) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("pasoAPaso").appendChild(node);
}

function bitterInfo() {
  document.getElementById("info-cuadro").innerHTML = "una cerveza para los que les guste la cerveza con verdadero carácter. Esta receta de cerveza negra (Stout) de estilo Imperial y con influencia americana. Es compleja la lista de ingredientes y sencilla la elaboración en sí. Si te faltara alguna de las maltas de color o sabor, puedes sustituirla o prescindir de ella. La receta obviamente no será igual, pero conseguirás en cualquier caso una cerveza espectacular.";
}

function bockmielInfo() {
  document.getElementById("info-cuadro").innerHTML = "Las cervezas Bock destacan por su bonito color oscuro (fruto de la adición de varias maltas tostadas), por su dulzor (por el añadido de maltas caramelizadas) y por su graduación (fruto de la gran cantidad de malta que llevan. En este caso, no tiene mucho color al maltas relativamente claras. Pero la distingue sobre todo el añadido de miel de flores, no tanto para darle dulzor ( el 95% de los azúcares de la miel son fermentables y por lo tanto desaparecen) pero para darle un aroma especial. Y su carácter indiscutiblemente alemán se lo dan los lúpulos Tettnanger y Hallertauer incluido un dry-hoping de 25g de este último."
}

function americanbrownInfo() {
  document.getElementById("info-cuadro").innerHTML = "De los Estados Unidos en la que juegan con los tiempos de cocción del lúpulo Cascade para ir sacando todo su espectro de sabores. Utiliza malta ámbar, combinando extracto de malta y malta en grano y un poco de malta cristal. Tiene una fermentación primaria corta (de 4 días nada más) que se completa con una fermentación secundaria de 15 días."
}

function mexicanaInfo() {
  document.getElementById("info-cuadro").innerHTML = "Las cervezas mexicanas tienen larga historia como bebida fermentada. México es hoy uno de los principales exportadores de cerveza del mundo. Una costumbre al beber cerveza es tomarla acompañada de rebanadas de limón con sal. Otra forma muy popular en todo el país es beberla como Michelada."
}

function stoutInfo() {
  document.getElementById("info-cuadro").innerHTML = "Una cerveza para los que les guste la cerveza con verdadero carácter. Esta receta de cerveza negra (Stout) de estilo Imperial y con influencia americana. Es compleja la lista de ingredientes y sencilla la elaboración en sí. Si te faltara alguna de las maltas de color o sabor, puedes sustituirla o prescindir de ella. La receta obviamente no será igual, pero conseguirás en cualquier caso una cerveza espectacular."
}