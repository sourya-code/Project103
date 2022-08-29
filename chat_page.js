
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBjCegcL-sa5-KckLWXdlr6v-Jmbo1-3Yo",
    authDomain: "chat-app-1a398.firebaseapp.com",
    databaseURL: "https://chat-app-1a398-default-rtdb.firebaseio.com",
    projectId: "chat-app-1a398",
    storageBucket: "chat-app-1a398.appspot.com",
    messagingSenderId: "240201044526",
    appId: "1:240201044526:web:53d651d2acbe1972ac45bf"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}