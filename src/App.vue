<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
      <v-toolbar-title>Global Hacks</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" :href="href"> Register </v-btn>
    </v-app-bar>

    <!-- <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      drawer: false,
      user: null,
      group: null,
      isAdmin: false,
      href: "https://www.eventbrite.com/e/global-hacks-hackathon-tickets-161988125845",
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
      if (firebase.auth().currentUser != null) {
        console.log("this user is signed in");
        firebase
          .firestore()
          .collection("Admins")
          .doc(firebase.auth().currentUser.email)
          .get()
          .then((docSnapshot) => {
            if (docSnapshot.exists) {
              this.isAdmin = true;
            }
          });
      }
    });
  },
  methods: {
    onSignout(e) {
      e.stopPropagation();
      firebase.auth().signOut();
      this.isAdmin = false;
    },
  },
};
</script>
