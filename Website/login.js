var firebaseConfig = {
    apiKey: "AIzaSyDb3O049HpbOBgGBlqcWFd4aYosROBhAuc",
    authDomain: "cognitive-ability.firebaseapp.com",
    databaseURL: "https://cognitive-ability.firebaseio.com",
    projectId: "cognitive-ability",
    storageBucket: "cognitive-ability.appspot.com",
    messagingSenderId: "175273990817",
    appId: "1:175273990817:web:df33e2aa12b2a130016ee0",
    measurementId: "G-YCLCX68LTM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();
  const auth = firebase.auth();
  function start()
  {
        var email = document.getElementById('email');
        var password = document.getElementById('password');
        
        const promise = auth.signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
        console.log("uvnwi")
        promise.catch(e => alert(e.message));
        alert("Signed in" + email);
  }
