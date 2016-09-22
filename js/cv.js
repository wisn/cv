"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

document.getElementById("cmd").addEventListener("submit", function (node) {
  var prompt = parseCommand(node.explicitOriginalTarget.value);
  var cmd = prompt[0];
  var arg = prompt[1];
  var msg = document.getElementById("msg");

  var bin = {
    cv: {
      init: {
        layer: "startup"
      },
      help: {
        layer: "startup"
      },
      profile: {
        layer: "profile"
      },
      edu: {
        layer: "education"
      },
      pro: {
        layer: "portofolio"
      },
      about: {
        layer: "about"
      }
    }
  };

  if (cmd === undefined || cmd === "") {
    msg.innerHTML = "Please input a command!";
    msg.style.marginTop = "0px";
  } else if (typeof bin[cmd] === "undefined") {
    msg.innerHTML = "Command \"" + cmd + "\" not found!";
    msg.style.marginTop = "0px";
  } else {

    if (arg === undefined) arg = "init";

    if (arg === "") {
      msg.innerHTML = "Please input an argument!";
      msg.style.marginTop = "0px";
    } else if (typeof bin[cmd][arg] === "undefined") {
      msg.innerHTML = "Argument \"" + arg + "\" not exist!";
      msg.style.marginTop = "0px";
    } else {

      if (prompt.length > 2) {
        msg.innerHTML = "It's' should be one argument...";
        msg.style.marginTop = "0px";
      }

      document.getElementById("startup").style.display = "none";
      document.getElementById("profile").style.display = "none";
      document.getElementById("education").style.display = "none";
      document.getElementById("portofolio").style.display = "none";
      document.getElementById("about").style.display = "none";

      document.getElementById(bin[cmd][arg].layer).style.display = "block";

      window.scrollTo(0, 0);
      node.explicitOriginalTarget.value = "";
    }
  }

  node.preventDefault();
  return false;
});

document.getElementById("msg").addEventListener("click", function (node) {
  node.target.style.marginTop = "-100px";
});

document.getElementById("prompt").addEventListener("change", function () {
  document.getElementById("msg").style.marginTop = "-100px";
});

function parseCommand(cmd) {

  if (cmd === "") {
    return 0;
  } else {
    var getLine = cmd.split(" ");

    return [].concat(_toConsumableArray(getLine));
  }
}