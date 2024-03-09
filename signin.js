
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { ref, getDatabase, onValue, set, push } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB2IUnbuhfg2J_8Gt7xSiNjaCI39kcCS0s",
    authDomain: "app-todo-571fe.firebaseapp.com",
    databaseURL: "https://app-todo-571fe-default-rtdb.firebaseio.com",
    projectId: "app-todo-571fe",
    storageBucket: "app-todo-571fe.appspot.com",
    messagingSenderId: "621915147460",
    appId: "1:621915147460:web:2f3bfd3e224aec22408d91",
    measurementId: "G-6JEK5M2KC4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();
  const auth = getAuth();

  let model = {}
  
  let userName  = document.getElementById('username');
  let email = document.getElementById('email');
  let password = document.getElementById('password');



  window.signUp = function (e) {
    e.preventDefault();
    model.email = email.value;
    model.userName = userName.value;
    model.password = password.value;
    console.log(model)
    createUserWithEmailAndPassword(auth, model.email, model.password)
        .then(function (res) {
            console.log(res)
            console.log(res.user.uid, "Succes Response");
            model.id = res.user.uid;
            var reference = ref(database, `user/${model.id}`);
            set(reference, model)
                .then(function (dbRes) {
                    alert('USer Created Succesfully');
                    window.location.href="todo.html"
                })
                .catch(function (dbErr) {
                    alert(dbErr.message);
                });

            email.value = "";
            userName.value = "";
            password.value = "";

        })
        .catch(function (err) {
            console.log(err, "Error Response");
            alert(err.message);
        })
}
