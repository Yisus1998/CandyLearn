
function registro(){

    var useremail = document.getElementById("usuario_c").value;
    var userpassd = document.getElementById("pass_c").value;

    firebase.auth().createUserWithEmailAndPassword(useremail, userpassd).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert(errorMessage);
      });
      

}


 function login(){
    var UserEma = document.getElementById("email_field").value;
    var UserPass = document.getElementById("password_field").value;


    firebase.auth().signInWithEmailAndPassword(UserEma, UserPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert(errorMessage);
        document.location.href ="menu.html";
      });
 }

 function cerrar(){
    firebase.auth().signOut()
    .then(function(){
      console.log('Salir');
    })
    .catch(function(error){
      console.log(error);
    })
   }

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      window.alert("LOGEADO");
      // ...
    } else {
      // User is signed out.
      // ...
      
    }
  });



