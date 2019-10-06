import Vue from "vue";
import Vuex from "vuex";
/*import { stat } from "fs";*/
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {
        name: "gilbert",
        surname: "ndresaj",
        birthDay: new Date(1995, 6, 7),
        description:
            "Hello I'm Gilbert, a software engineer based in Turin, Italy. Full-stack developer with industry experience building websites and web applications. I specialize in JavaEE and have professional experience working with Angular. ",

    },
    technologies: [
        {name: "JavaEE", level: 90 },
        {name: "Javascript", level: 80 },
        {name: "HTML & (S)CSS", level: 80 },
        {name: "AngularJS / Angular2+", level: 70 },
        {name: "Node.js", level: 70 },
        {name: "Express", level: 60 },
        {name: "Vue", level: 55 }
    ],
    projects: [{
        name: "LeafPic Gallery",
        description: "LeafPic is a fluid, material-designed alternative gallery, it also is ad-free and open source under GPLv3 license. I worked as the major designer in this project, I designed and implemented feature such as photo affix.",
        link: "https://github.com/HoraApps/LeafPic",
        icon: "leaf",
        startDate: "Jan 7, 2016",
        endDate: "Present",
        developer: "HoraApps",
        tags: [
            { name: "#opensource" },
            { name: "#android" },
            { name: "#app" },
            { name: "#gallery" }
        ]
    }, {
        name: "portfolio",
        description: "Portfolio made with Vue.js and Tailwind css! this portfolio is open source and you can find it on github, please credit if you use it!",
        link: "https://github.com/gilbertndr/portfolio",
        icon: "address-card",
        startDate: "Sep 20, 2019",
        endDate: "Present",
        developer: "gilbertndr",
        tags: [
            { name: "#opensource" },
            { name: "#vue" },
            { name: "#tailwindcss" },
            { name: "#portfolio" }
        ]
    },{
        name: "adbFI",
        description: "abdFi is an android app that let's you debug android app's over Wi-Fi, without the cable connected to your PC!",
        link: "https://github.com/gilbertndr/adbFI",
        icon: "wifi",
        startDate: "Sep 20, 2019",
        endDate: "Present",
        developer: "gilbertndr",
        tags: [
            { name: "#opensource" },
            { name: "#android" },
            { name: "#adb" }
        ]
    }
    ], events: [
        { 
            name: "Xtphere ",
            description: "I work in this company as a fullstack developer, here i learned building webapps from scratch, i mostly used JavaEE with springboot and Angular for frontend!",
            role: "FullStack Developer ",
            type: "Work",
            startDate: "Jun 2018",
            endDate: "Present"
        }, { 
            name: "Edisoft ",
            description: "This was my first job as a developer, Here i learned more about frontend development i mostly used php, javascript, html, css and also i worked a lot with Wordpress! ",
            role: "FrontEnd Developer ",
            type: "Work",
            startDate: "Gen 2017",
            endDate: "Jun 2017"
        }, { 
            name: "IIS G.Valluari ",
            description: "I got my diploma in this IT school, and here it started learning how to code with C#.",
            role: "Student",
            type: "education",
            startDate: "Sep 2010",
            endDate: "Jun 2016"
        }

    ]
},

    getters: { age: state => {
            let ageDiff = Date.now() - state.profile.birthDay;
            let ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        profile: state => state.profile,
        projects: state => state.projects,
        technologies: state => state.technologies,
        events: state => state.events
    },
    mutations: {},
    actions: {}
});
