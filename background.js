chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.htm', {
    id: 'spotify',
    innerBounds: {width: 1300, height: 700}
  });
});