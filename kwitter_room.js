// Your web app's Firebase configuration
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
//ADD YOUR FIREBASE LINKS HERE

var username= localStorage.getItem("user");
document.getElementById("welcome").innerHTML="Welcome "+username+" !";

function logout(){
      localStorage.removeItem("user");
      localStorage.removeItem("Room Name:");
      window.location="index.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name: "+Room_names);
      row="<div class = 'display_names' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function add_room(){
      room_name=document.getElementById("room_input").value;
      firebase.database().ref("/").child(room_name).update({
            purpose :"To store the room name given by the user"
      });
      localStorage.setItem("Room Name:",room_name);
      window.location = "kwitter_page.html";
}



function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room Name", name);
window.location= "kwitter_page.html";
}