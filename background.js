chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create(
    'index.htm',
    {id: 'spotify', height: 700, width: 1300}
  );
});
