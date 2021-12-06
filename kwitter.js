function add_user(){
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("user", user_name);
    window.location="kwitter_room.html";
}