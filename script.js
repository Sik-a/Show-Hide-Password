const password = document.querySelector( '#password' ); 
const eyeSlash = document.querySelector( '#togglePassword' ); 

eyeSlash.addEventListener( 'click', function(){ 
  const type = password.getAttribute( 'type' ) === 'password' ? 'text' : 'password'; 
  password.setAttribute( 'type', type ); 

  eyeSlash.classList.toggle( 'bi-eye' ); 
} ); 