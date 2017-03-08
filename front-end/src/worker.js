let i = 0;
postMessage(i);
var onmessage = function(e) {
  postMessage(++i)
}
