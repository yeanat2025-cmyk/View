// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAavkx6aU0hiAzdcP70wjdG-YEXYmm1mdc",
  authDomain: "game24-app.firebaseapp.com",
  databaseURL: "https://game24-app-default-rtdb.firebaseio.com",
  projectId: "game24-app",
  storageBucket: "game24-app.firebasestorage.app",
  messagingSenderId: "551706234613",
  appId: "1:551706234613:web:4fd71e34e07b8b7a4dbfbc",
  measurementId: "G-LJ0RZLS9MB"
};

// Firebase start
firebase.initializeApp(firebaseConfig);

// Database
const db = firebase.database();

// URL থেকে user id নেওয়া
const params = new URLSearchParams(window.location.search);
const userId = params.get("user") || "user1";

// video element
const video = document.getElementById("screen");

// database listen
db.ref("screen/" + userId).on("value", (snapshot) => {

    const data = snapshot.val();

    if(!data){
        console.log("No stream data");
        return;
    }

    console.log("Screen Data:", data);

    // example status
    if(data.status === "online"){
        document.body.style.background = "green";
    }else{
        document.body.style.background = "black";
    }

});
