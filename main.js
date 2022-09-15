function openTab(evt, TabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


// Toggle button
var mode_btn = document.getElementById("mode_btn");

if(localStorage.getItem("theme") == null)
{
    localStorage.setItem("theme", "light");
}
var localTheme = localStorage.getItem("theme");

if(localTheme == "light")
{
    document.getElementById("mode_btn").checked = false;
    document.body.classList.remove("dark-theme");
}
else if(localTheme == "dark")
{
    document.getElementById("mode_btn").checked = true;
    document.body.classList.add("dark-theme");
}

mode_btn.onclick = function()
{
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme"))
    {
        document.getElementById("mode_btn").checked = true;
        localStorage.setItem("theme", "dark");
    }
    else
    {
        document.getElementById("mode_btn").checked = false;
        localStorage.setItem("theme", "light");
    }
}

// Inspect blocker
document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e)
{
    // disable F12 key
    if(e.keyCode == 123)
    {
        return false;
    }

    // Disable ctrl + c keys
    if(e.ctrlKey && e.keyCode == 67)
    {
        return false;
    }

    // Disable ctrl + U keys
    if(e.ctrlKey && e.keyCode == 85)
    {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == "U".charCodeAt(0))
    {
        return false;
    }
    
    if(e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0))
    {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 74)
    {
        return false;
    }

}