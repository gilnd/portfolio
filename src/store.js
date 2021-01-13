import Vue from "vue";
import Vuex from "vuex";
/*import { stat } from "fs";*/
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {
        name: "Gilbert",
        surname: "Ndresaj",
        birthDay: new Date(1995, 6, 7),
        startDescription: "Hello I’m Gilbert",
        description:
            ", a software engineer based in Turin, Italy. Full-stack developer with industry experience building websites and web applications. I’m specialized in JavaEE and have professional experience working with Angular. ",
    },
    technologies: {
        programming:  [
            { name: "Java & JavaEE", level: 90 , },
            { name: "Java for Android", level: 80 , },
            { name: "HTML & (S)CSS", level: 92 },
            { name: "Javascript (ES6)", level: 80 },
            { name: "Typescript", level: 60 }
        ],
        frameworks: [
            { name: "Vue.js", level: 80 },
            { name: "AngularJS / Angular2+", level: 85 },
            { name: "Bootstrap", level: 80 },
            { name: "Tailwind.css", level: 70 },
            { name: "Node.js & Express.js", level: 68 },
        ],
        tools:[
            { name: "git" },
            { name: "SVN" },
            { name: "Gradle" },
            { name: "Maven" },
            { name: "Webpack" },
            { name: "Netlify" },
            { name: "Wordpress" }
        ]
    },
    projects: [{
        name: "LeafPic Gallery",
        description: "LeafPic is a fluid, material-designed alternative gallery, it also is ad-free and open source under GPLv3 license. I worked as the major designer in this project, I designed and implemented features such as photo affix.",
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
        description: "Portfolio made with Vue.js and Tailwind css! This portfolio is open source and you can find it on Github!",
        link: "https://github.com/gilnd/portfolio",
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
        description: "abdFi is an Android app that lets you debug Android apps over Wi-Fi, without the cable connected to your PC!",
        link: "https://github.com/gilnd/adbFI",
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
            name: "NTT Data ",
            description: "I work in this company as a fullstack developer, I mostly use JavaEE with Spring Boot and Angular for frontend!",
            role: "Full Stack Developer ",
            type: "Work",
            startDate: "Nov 2019",
            endDate: "Present",
            roles:[
                {description:" Improved and maintained ANGULAR 2 CUSTOM FRAMEWORK following UI and UX guidelines given by Intesa SanPaolo." },
                {description:" Developed and maintained a back office payment webapp with Angular2 for Intesa SanPaolo." },
                {description:" Developed features and maintained web applications used by italian public administration." },
                {description:" Migrated from mongoDB v3 to mongoDB v4 , updated to the latest libraries and maintained an insurance engine for Intesa SanPaolo Assicura." }
            ]
        },
        { 
            name: "Xtphere S.r.l.",
            description: "Xtphere Srl is a company which carries out innovative solutions for Web & Digital Technology, Mobile Experience, Document Process Management, Big Data and Cloud Migration.",
            role: "Full Stack Developer ",
            type: "Work",
            startDate: "Jun 2018",
            endDate: "Nov 2019",
            roles:[
                {description:" Developed features and maintained an insurance engine, made with JavaEE & AngularJS for Intesa SanPaolo Assicura." },
                {description:" Migrated projects from old Libraries & tools to new ones and improved general performance." },
                {description:" Interfaced with Miroglio Group on a monthly basis providing help and support for new features and improvements." },
                {description:" Developed, tested and maintained cross platform web applications that work on various devices and browsers es: bigEYE."}
            ]
        }, { 
            name: "Edisoft S.r.l.",
            description: "Edisoft Srl is a small web agency specialized in development of websites & web applications, it also offers high quality graphic design, online advertising and SEO optimization. ",
            role: "Front End Developer ",
            type: "Work",
            startDate: "Gen 2017",
            endDate: "Jun 2017",
            roles:[
                {description:" Maintained E-Commerce website and added new features, with Wordpress." },
                {description:" Developed and maintained code for client websites, mostly using HTML, CSS, Javascript, Jquery & PHP." },
            ]
        }, { 
            name: "IIS G.Vallauri ",
            description: " ",
            role: "Student",
            type: "education",
            startDate: "Sep 2010",
            endDate: "Jun 2016",
            roles:[
                { description:" In depth learning of OOP programing with C#. " },
                { description:" In depth learning of HTML, CSS, JS & Jquery. " },
                { description:" Learned basics of development of C & C++." },
                { description:" Learned basics of networks and their structure. " }
            ]
        }
    ], socials: [
        {
            name: "LinkedIn",
            link: "https://linkedin.com/in/gilbertndr/",
            icon: "linkedin" 
        }, {
            name: "Github",
            link: "https://github.com/gilnd",
            icon: "github" 
        }, {
            name: "Twitter",
            link: "https://twitter.com/gilbertndr",
            icon: "twitter" 
        }, {
            name: "instagram",
            link: "https://www.instagram.com/gil.ndr/",
            icon: "instagram" 
        }, {
            name: "Spotify",
            link: "https://open.spotify.com/user/fmlddu645fmfbxo6z10moaydu",
            icon: "spotify" 
        },  
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
        events: state => state.events,
        socials: state => state.socials
    },
    mutations: {},
    actions: {}
});
