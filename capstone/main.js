function validate() {
  const form = document.getElementById("my-form");
  const error = document.querySelector(".error");
  const success = document.querySelector(".successful");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      error.style.display = "block";
      success.style.display = "none";

      setTimeout(() => {
        error.style.display = 'none';
      }, 10000); // hide the success message after 10 seconds
    } 
    
    else {
      error.style.display = "none";
      success.style.display = "block";

      setTimeout(() => {
        success.style.display = 'none';
      }, 15000); // hide the success message after 10 seconds

      // Send form data to mail.php
      /*const xhr = new XMLHttpRequest();
      xhr.open("POST", "mail.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            console.log("Mail sent successfully");
          } else {
            console.log("Error sending mail");
          }
        }
      };
      xhr.send(`name=${name}&email=${email}&message=${message}`); */

      var formData = new formData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      fetch('mail.php', {
        method: 'POST',
        body: formData
      }) .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(`Error Sending Message ${error}`)
      })


      /*var formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);


      fetch('mail.php', {
        method : 'POST',
        body: formData
      })
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
      })

      name.value = "";
      email.value = "";
      message.value = "";*/

      
    }
  });

}

var togglebutton = document.getElementById("toggle");
function toggleOpen(){
    togglebutton.style.right = "0";
}
function toggleClose(){
    togglebutton.style.right = "-500px";
}

/* Intersection Observers */

const navigation = document.querySelector('.navigation');
const hero = document.querySelector('.hero-section');
const header = document.querySelector('#header');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if(!entry.isIntersecting){
      navigation.classList.add('show')
    } else{
      navigation.classList.remove('show')
    }
  })
})

observer.observe(hero)

/* 

const header = document.querySelector("header")
const sectionOne = document.querySelector(".home-intro")

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
}

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add("nav-scrolled")
        }
        else{
            header.classList.remove("nav-scrolled")
        }
    })
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne)

*/