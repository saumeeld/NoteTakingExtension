/*
alert(window.location.href);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);
 	  chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
	}
  }
);
*/

//want to add input area to side of body
//put original body in div -> put it to the side (probably want to create my own tag to prevent site style from affecting)
//bootstrap grid may be nice here

var URL = window.location.href;
console.log('hello');
/*
$('body').children().wrapAll('<iframe id = "frame" src = "' + URL + '"></iframe>');
$('#frame').css('width', '80vw');
$('#frame').css('height', '100vh');
$('#frame').css('float', 'left');
$('body').append('<div class = "fack"></div>');
$('.fack').append('<textarea id = "dick"> </textarea>');
$('.fack').css('width','20vw');
$('.fack').css('height','100vh');
$('.fack').css('position','fixed');
$('.fack').css('right','0');
$('#dick').css('height','100%');
$('#dick').css('width','100%');
*/


$('body').children().wrapAll('<div class="originalBody"></div>');
$('.originalBody').wrap('<div class="all"></div>');
$('.all').append('<div class="textDiv"></div>');
$('.textDiv').append('<textarea class = "textArea"></textarea');
$('.all').css('height', '100vh');
$('.all').css('width', '100vw');
$('.originalBody').css('float','left');
$('.originalBody').css('height','100%');
$('.originalBody').css('width','80%');
$('.textDiv').css('float','left');
$('.textDiv').css('height','100%');
$('.textDiv').css('width','20%');
$('.textArea').css()

/*
$('body').append('<button> get data </button>');
$('button').css('height', '50px');
$('button').css('width', '50px');
$('button').css('position', 'fixed');
$('button').css('top', '10px');
$('.fack').find('#dick').css('height','100%');
$('.fack').find('#dick').css('width','100%');
*/

/*
  function loadSaveData(){
  	 chrome.storage.sync.get(URL, function(data) {
    		$('#dick').val(data[URL]);
    });
  }

loadSaveData();

  function saveChanges() {
    // Get a value saved in a form.
    var theValue = $('#dick').val();
    alert(theValue);

    var obj = {};
    obj[URL] = theValue;

    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set(obj, function() {
      // Notify that we saved.
      alert('Settings saved');
    });
  }

  function displaySaveData() {
    // Get a value saved in a form.
    var theValue = chrome.storage.sync.get(URL, function(data) {
    		alert(JSON.stringify(data));
    });


  }

$('#dick').change(function(){
	saveChanges();
})
  
$('button').click(function(){
	displaySaveData();
})
*/