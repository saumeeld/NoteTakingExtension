var URL = window.location.href;
console.log('hello');

$welcomeHeader =$('<div id = "welcomeHeader" class= ""><h1 id= "welcomeText" class = "reset"> Welcome to Browser Notes! Take Notes in the Area Below. You can resize if you need and minimize. Browser Notes will save your notes for you!</h1></div>');
$resizable = $('<div id = "resizable" class = "ui-widget-content"></div>');
$draggableBar = $('<div id="handle" class="ui-resizable-handle ui-resizable-n">');
$notepad = $('<textarea id = "notepadX" class= "">');

$resizable.append($draggableBar);
$resizable.append($welcomeHeader);
$resizable.append($notepad);
$("body").append($resizable);

$("#resizable").resizable({
   handles: {'n': '#handle'}
});