



//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCF71atIUIJdfta-YT7IXc7l3bEkOgh3Qw",
      authDomain: "kwitter-859e7.firebaseapp.com",
      databaseURL: "https://kwitter-859e7-default-rtdb.firebaseio.com",
      projectId: "kwitter-859e7",
      storageBucket: "kwitter-859e7.appspot.com",
      messagingSenderId: "748663611801",
      appId: "1:748663611801:web:59039569fdd9eb4069b308"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user");
room_name= localStorage.getItem("Room Name:");

function send_msg(){
      msg= document.getElementById("input_msg").value;
      firebase.database().ref(room_name).push({
            like:0,
            Name: user_name,
            Message:msg
      });
      document.getElementById("input_msg").value="";
}

    function logout(){
      localStorage.removeItem("user");
      localStorage.removeItem("Room Name:");
      window.location="index.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
