var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}


function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbx4lIfK-_MHygGHueRIQ3VaPt4easgsdjhnRTyX1Xh_sxm6BTtJbxXL3KkbY9aC68iK/exec'
  const form = document.forms['submit-to-google-sheet']
  let msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
       // msg.innerHTML = "Message sent Successfully!!!";
        setTimeout(function(){
            msg.innerHTML = ""
            msg.style = "position: relative"
            msg.style.left ="270px";
            msg.style.bottom ="15px";
            msg.style.margin = "20px";
            msg.style.padding ="10px 10px";
            msg.style.color= "rgb(5, 5, 5)";
            msg.style.backgroundColor= "rgba(231, 250, 231, 0.7)";
            msg.style.borderRadius = "5px";
            msg.style.color = "green";
            msg.style.border = "2px solid rgb(129, 253, 129)";
            msg.innerHTML = "Message sent!!!";
        }, 900)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))

  })