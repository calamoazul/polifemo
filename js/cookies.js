$(document).ready(function () {
   var cookies = $('#alertcookies');
   var aceptarcookies = $('#aceptar-cookies');
   var rechazarcookies = $('#rechazar-cookies');
   function aprobarcookies() {
     alert('Se han aprobado las cookies');}
   function suspendercookies () {
       alert('Se han eliminado las cookies');}
   if (aceptarcookies.click(aprobarcookies()) || rechazarcookies.click(suspendercookies())){
    cookies.hide();}
   else {
    alert('algo ha salido mal');
  }
});
