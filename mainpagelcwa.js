var firebaseConfig = {
    apiKey: "AIzaSyDii2b1PW_wxW_ja2SfMVbL3O25KPgri9Q",
    authDomain: "lcwa-7705b.firebaseapp.com",
    databaseURL: "https://lcwa-7705b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "lcwa-7705b",
    storageBucket: "lcwa-7705b.appspot.com",
    messagingSenderId: "322364853597",
    appId: "1:322364853597:web:d12a0d7f0aef826e7a2cb4"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function AddRoom()
{
  room_name = document.getElementById("roomname").value;
  window.location = "messagepagelcwa.html";

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("roomname", room_name);
    
}

function GetData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='roomname' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

GetData();

function RedirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomname", name);
    window.location = "messagepagelcwa.html";
}

function ReturnHome() {
localStorage.removeItem("user_name");
localStorage.removeItem("roomname");
    window.location = "lcwa.html";
}
