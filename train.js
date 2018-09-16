var config = {
    apiKey: "AIzaSyCOPCBajRQ8IdJorWNtOjrWkTtaRXK6Mjw",
    authDomain: "train-schedule-b439a.firebaseapp.com",
    databaseURL: "https://train-schedule-b439a.firebaseio.com",
    projectId: "train-schedule-b439a",
    storageBucket: "train-schedule-b439a.appspot.com",
    messagingSenderId: "1058415590043"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database(); 

  $(document).ready(function () {
      $("#submit").click(function () {
          let name = $("name-input").val(); 
          let destination = $("destination-input").val (); 
          let time = $("time-input").val (); 
          let frequency = $("frequency-input").val (); 

          console.log("click"); 

          let newTrain = {
              name: $("#name-input").val(), 
              destination: $("destination-input").val (), 
              time: $("time-input").val (), 
              frequency: $("frequency-input").val ()
          }; 

          console.log(name); 

          database.ref().push({
              name: name,
              destination: destination, 
              time: time, 
              frequency: frequency
          }); 
          
          $("#name-input").val("");
          $("#destination-input").val("");
          $("#time-input").val("");
          $("#frequency-input").val("");

      })
  })