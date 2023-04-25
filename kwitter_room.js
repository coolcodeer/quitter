
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBP9i9Rt6FGz82Xu3zetSCFKgn88LnphYk",
      authDomain: "quitter-d39c2.firebaseapp.com",
      databaseURL: "https://quitter-d39c2-default-rtdb.firebaseio.com",
      projectId: "quitter-d39c2",
      storageBucket: "quitter-d39c2.appspot.com",
      messagingSenderId: "628704356420",
      appId: "1:628704356420:web:f881e158d679f4fbbcf411"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "welcome "+ user_name + "?";

  function add_room(){
      room_name = document.getElementById("room_name").value ;

      firebase.database().ref("/").child(room_name).update({
            purpose:"add room_name"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name" + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}