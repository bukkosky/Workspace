var typing = document.querySelector(".typing"),
    counter = 0;

function typingStart(text) {
  var interval = setInterval(function(){
    if(text.length>counter){
      typing.textContent += text[counter];
      counter++;
    }else{
      clearinterval(interval);
    }
  }, 100 + Math.random()*300);
}
typingStart("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
