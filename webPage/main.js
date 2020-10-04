function downfn() {
  console.log("down:" + event.keyCode);
  if (event.keyCode == 13) {
    i1.onclick();
  }
}
function upfn() {
  console.log("up：" + String.fromCharCode(event.keyCode));
}
