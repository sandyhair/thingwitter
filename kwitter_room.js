
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD7koeqelHX8v_VSSQZ15Cu8NkeLQ0kloI",
      authDomain: "thingachat.firebaseapp.com",
      databaseURL: "https://thingachat-default-rtdb.firebaseio.com",
      projectId: "thingachat",
      storageBucket: "thingachat.appspot.com",
      messagingSenderId: "772635866351",
      appId: "1:772635866351:web:78c3ce7f15a07d4997571a",
      measurementId: "G-EF2G4CH9E5"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

