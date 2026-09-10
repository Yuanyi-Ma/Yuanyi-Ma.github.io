(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeBtn');
  try {
    var s = localStorage.getItem('theme');
    if (s === 'dark' || s === 'light') root.setAttribute('data-theme', s);
  } catch (e) {}
  if (!btn) return;
  btn.addEventListener('click', function () {
    var cur = root.getAttribute('data-theme');
    if (!cur) cur = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();
