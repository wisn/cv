document.getElementById("cmd").addEventListener("submit", (node) => {
  var prompt = parseCommand(node.explicitOriginalTarget.value)
  var cmd = prompt[0]
  var arg = prompt[1]
  var msg = document.getElementById("msg")

  const bin = {
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
  }

  if (cmd === undefined || cmd === "") {
    msg.innerHTML = "Please input a command!"
    msg.style.marginTop = "0px"

  } else if (typeof bin[cmd] === "undefined") {
    msg.innerHTML = `Command \"${cmd}\" not found!`
    msg.style.marginTop = "0px"
  } else {

    if (arg === undefined) arg = "init"

    if (arg === "") {
      msg.innerHTML = "Please input an argument!"
      msg.style.marginTop = "0px"

    } else if (typeof bin[cmd][arg] === "undefined") {
      msg.innerHTML = `Argument \"${arg}\" not exist!`
      msg.style.marginTop = "0px"
    } else {

      if (prompt.length > 2) {
        msg.innerHTML = `It\'s should be one argument...`
        msg.style.marginTop = "0px"
      }

      document.getElementById("startup").style.display = "none"
      document.getElementById("profile").style.display = "none"
      document.getElementById("education").style.display = "none"
      document.getElementById("portofolio").style.display = "none"
      document.getElementById("about").style.display = "none"

      document.getElementById(bin[cmd][arg].layer).style.display = "block"

      window.scrollTo(0, 0)
      node.explicitOriginalTarget.value = ""
    }
  }

  node.preventDefault()
  return false
})

document.getElementById("msg").addEventListener("click", (node) => {
  node.target.style.marginTop = "-100px"
})

document.getElementById("prompt").addEventListener("change", () => {
  document.getElementById("msg").style.marginTop = "-100px"
})

function parseCommand(cmd) {

  if (cmd === "") {
    return 0
    
  } else {
    var getLine = cmd.split(" ")

    return [...getLine]
  }
}

document.getElementById("parser").addEventListener("click", (node) => {
  var msg = document.getElementById("msg")

  msg.style.marginTop = "0px" 
  msg.innerHTML = "It\'s used in this CV!"

  node.preventDefault()
  return false
})