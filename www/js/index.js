var BodyColor = function () {
  var hex =  function () {
    var values = '0123456789ABCDEF';
    return values[Math.floor(Math.random() * values.length)];
  };

  var newColor = function (existingColor) {
    var color;

    // not ideal: knockout passes object through newColor function
    if (typeof existingColor === 'string') {
      color = existingColor;
    } else {
      color = '#';

      var i;
      for (i = 0; i < 6; i++) {
        color += hex();
      }
    }

    var body = document.getElementsByTagName('body')[0];
    body.style.background = color;
    window.localStorage.color = color;
  };

  return {
    initialize: function () {
      newColor(window.localStorage.color);

      return this;
    },
    newColor: newColor
  };
};

var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    var bodyColor = BodyColor().initialize();

    document.addEventListener('deviceready', this.onDeviceReady, false);
    document.getElementById('app').addEventListener('click', function () {
      bodyColor.newColor();
    });
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
};

app.initialize();
