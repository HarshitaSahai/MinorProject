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
 
 // firebase.analytics();
  const auth = firebase.auth();
  const loginform = document.querySelector('#login-form');
  loginform.addEventListener('submit',(e) => {
    e.preventDefault();
      const email = loginform['email'].value;
      const password = loginform['password'].value;
    //  const promise = auth.createUserWithEmailAndPassword(email,password); sign up 
    const promise = auth.signInWithEmailAndPassword(email,password);
    auth.onAuthStateChanged(function(user){
      if(user){
      //const email = user.email;
      //alert("Active user " + user.email);
      window.location = 'instructionpage.html';
      
      }
      else{
        alert("No ACtive user");
      }
    })

  })
      