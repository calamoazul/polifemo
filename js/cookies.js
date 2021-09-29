$(document).ready(function () {
   var cookies = $('#alertcookies');
   var aceptar = $('#aceptarCookies');
   var rechazar = $('#rechazarCookies');
   function aprobarcookies(){
      aceptarcookies.on('click', function(){
        alert('Se han aprobado las cookies');
        cookies.hide();
      })}
   function suspendercookies(){
      rechazarcookies.on('click', function(){
        alert('Se han rechazado cookies');
        cookies.hide();
      })}
});
