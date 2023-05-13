// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBCwqXh5C6D2pBNnDh48iHuHgOFDg5ylMY",
    authDomain: "kwitter-b601d.firebaseapp.com",
    databaseURL: "https://kwitter-b601d-default-rtdb.firebaseio.com",
    projectId: "kwitter-b601d",
    storageBucket: "kwitter-b601d.appspot.com",
    messagingSenderId: "427931998389",
    appId: "1:427931998389:web:83ab0f12e2c574d72406fc"
  };
  


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
   localStorage.setItem("user_name", user_name);

   window.location = "chat_room.html";
}



