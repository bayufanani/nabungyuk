import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "./firebase";

// register user firebase anonymously
signInAnonymously(auth)
    .then(() => {
        console.log("Signed in anonymously");
    })
    .catch((error) => {
        console.log(error);
    });

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
    } else {
        console.log("// user logged out");
    }
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
