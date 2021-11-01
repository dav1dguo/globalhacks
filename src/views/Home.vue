<template>
  <v-row no-gutters>
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="https://wallpaperaccess.com/full/796835.jpg"
    >
      <v-theme-provider dark>
        <v-container fill-height>
          <v-row align="center" class="white--text mx-auto" justify="center">
            <v-col class="white--text text-center" cols="12" tag="h1">
              <span
                :class="[
                  $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2',
                ]"
                class="font-weight-light"
              >
                WELCOME TO
              </span>

              <br />

              <span
                :class="[
                  $vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4',
                ]"
                class="font-weight-black"
              >
                GLOBAL HACKS
              </span>
              <v-row>
                <v-col cols="12">
                  <span
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2',
                    ]"
                    class="font-weight-light"
                  >
                    OCTOBER 23 - OCTOBER 24
                  </span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <span
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3',
                    ]"
                    class="font-weight-light"
                  >
                    2021
                  </span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <span
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2',
                    ]"
                    class="font-weight-light"
                  >
                    STARTS AT 10 A.M. PDT
                  </span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-theme-provider>
    </v-img>
    <v-container vertical-align:middle class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">HACK THE WORLD</h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        Global Hacks is a hackathon aimed toward promoting a higher level of
        education and diversity in STEM and programming for all students across the world. Our
        goal is to introduce to students professional APIs and tools to inspire
        them to launch their own ideas and projects to tackle global problems.
        By bringing together innovative minds and students with an appetite for
        knowledge, Global Hacks provides the perfect environment for everyone to
        succeed and grow.
      </v-responsive>
      <div></div>
    </v-container>

    <!-- <v-container vertical-align:middle class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">THEME</h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        
      </v-responsive>
      <div></div>
    </v-container> -->

    <v-container vertical-align:middle class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">JUDGING CRITERIA</h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        TBD (scalability, difficulty, originality, potential market)
      </v-responsive>
      <div></div>
    </v-container>

    <v-container vertical-align: middle class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">THANK YOU SPONSORS (TBD)</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <!-- <v-container vertical-align: middle class="text-center">
        <h3 class="display-1 font-weight-bold mb-3" style="font-style: oblique">
          PREMIUM SPONSORS
        </h3>
        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row align="center" justify="center">
          <v-col
            v-for="({ icon, link }, i) in premium"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card
              class="py-14 px-4"
              color="grey lighten-5"
              flat
              style="height: 300px"
            >
              <v-theme-provider dark>
                <div>
                  <v-avatar color="primary" size="150">
                    <v-btn @click="goToLink(link)">
                      <v-img :src="getImage(icon)" alt="pic" />
                    </v-btn>
                  </v-avatar>
                </div>
              </v-theme-provider>
            </v-card>
          </v-col>
        </v-row>
      </v-container> -->

      <v-container vertical-align: middle class="text-center">
        <!-- <h3 class="display-1 font-weight-bold mb-3" style="font-style: oblique">
          SPONSORS
        </h3>
        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive> -->

        <v-row align="center" justify="center">
          <v-col
            v-for="({ icon, link }, i) in sponsors"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card
              class="py-14 px-4"
              color="grey lighten-5"
              flat
              style="height: 300px"
            >
              <v-theme-provider dark>
                <div>
                  <v-avatar color="primary" size="150">
                    <v-btn @click="goToLink(link)">
                      <v-img :src="getImage(icon)" alt="pic" />
                    </v-btn>
                  </v-avatar>
                </div>
              </v-theme-provider>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container vertical-align: middle class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">FEATURES</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col
          v-for="({ icon, title, text }, i) in features"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card class="py-12 px-4" color="grey lighten-5" flat>
            <v-theme-provider dark>
              <div>
                <v-avatar color="primary" size="88">
                  <v-icon large v-text="icon"></v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>

            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              v-text="title"
            ></v-card-title>

            <v-card-text class="subtitle-1" v-text="text"> </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container vertical-align: middle class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">FAQ</h2>
      <v-expansion-panels inset>
        <v-expansion-panel
          v-for="({ answer, question }, i) of questions"
          :key="i"
        >
          <v-expansion-panel-header
            v-text="question"
          ></v-expansion-panel-header>
          <v-expansion-panel-content v-html="answer" class="text-wrap" style="padding: 20px">
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>

    <v-container vertical-align:middle class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">Join Global Hacks Today</h2>
      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        This year we will be hosting a virtual hackathon. Arrive solo or arrive
        with a team, we look forward to seeing your bright ideas. Happy coding!
      </v-responsive>
      <div></div>
    </v-container>
    <v-parallax
      class="text-center"
      :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
      style="width: 100%"
      src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    >
      <v-container fill-height class="text-center">
        <v-row class="mx-auto">
          <v-col v-for="[value, title] of stats" :key="title" cols="12" md="3">
            <div class="text-center">
              <div
                class="display-3 font-weight-black mb-4"
                v-text="value"
              ></div>

              <div
                class="title font-weight-regular text-uppercase"
                v-text="title"
              ></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      features: [
        {
          icon: "mdi-account-group-outline",
          title: "Mentors and Workshops",
          text: "Thanks to our generous sponsors, there will be plenty of opportunities to learn and acquire new skills and tools.",
        },
        {
          icon: "mdi-update",
          title: "Invest In You",
          text: "Shake a leg and dive right into professional APIs and real world problems with Global Hacks. Not only is our event free, it provides an excellent spring board into a wide variety of industries.",
        },
        {
          icon: "mdi-podium",
          title: "Prizes",
          text: "TBD",
        },
      ],
      // premium: [
      //   {
      //     icon: "./Pictures/pineapple.jpeg",
      //     link: "https://shawee.io/",
      //   },
      // ],
      sponsors: [
        {
          icon: "./Pictures/pineapple.jpeg",
          link: "https://shawee.io/",
        },
        {

        }
      ],
      stats: [
        ["$3000+", "Price of Classes for the same content"],
        ["$x+", "in prizes (TBD)"],
        ["10+", "workshops"],
        ["200+", "participants"],
      ],
      questions: [
        {
          question: "What will we do at this hackathon?",
          answer:
            "In addition to our numerous educational workshops to bolster your command of professional tools, you will have the opportunity to meet and work with dozens of bright individuals to collaborate on a project addressing a specific theme that will be announced when the event commences. ",
        },
        {
          question: "Who is elegible to join?",
          answer:
            "All students with an appetite for knowledge is welcome to attend! Students and beginners are especially encouraged to participate, as this hackathon will provide the perfect environment and tools to learn and grow. No coding or web development is necessary as workshops will provide you with everything you'll need. You will be asked to required to produce a proof of student status prior to the event's commencement, ( e.g. student id or student email domain) . ",
        },
        {
          question: "How long is the event?",
          answer:
            "The event starts on Saturday, October 23, 2021 at 9:00 A.M. PDT and ends on Sunday, October 24, 2021 at 9:00 A.M. PDT. After the event and hacking concludes, we will proceed onto presentations and the award ceremony.",
        },
        {
          question: "How many people can be in a team?",
          answer: "Teams may consist of up to a maximum of four (4) people.",
        },
        {
          question: "What should I do if I don't have a team?",
          answer:
            "At the beginning of the event, we will ensure that every individual seeking a team is placed into the best possible team. Individuals may choose to work alone, however we highly encourage you expand your network and meet new people and new ideas.",
        },
        {
          question: "Still have questions?",
          answer: "We are here to help! Please contact us at: contact@globalhacks.net"
        },
      ],
    };
  },
  methods: {
    getImage(icon) {
      return icon ? require("" + icon) : "";
    },
    goToLink(link) {
      window.open(link);
    },
  },
};
</script>
