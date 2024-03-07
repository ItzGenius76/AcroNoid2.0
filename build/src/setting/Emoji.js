export default class OrasEmoji extends Object {
    constructor(client) {
        super();
        this.tick = "<:tick_icons:1211517921864454214>";
        this.cross = "<:cross_1:1211499430239543337>";
        this.playing = "<a:music_1:1211354430637604915>";
        this.exclamation = "<:icons_question:1211517978277838909>";
        this.queue = "<:music_queue:1211517903132819496>";
        this.info = "<:icons_question:1211517978277838909>";
        this.defSearch = "<:IconSearch:1211517926226534421>";
        this.premium = "🌟";
        this.invite = "💌";
        this.support = "🤝";
        this.spotiSearch = "🎵";
        this.deezSearch = "🎵";
        this.vote = "🗳️";
        this.soundSearch = "🎵";
        this.badges = {
            named: "👑",
            owner: "👑",
            dev: "👩‍💻",
            admin: "🔧",
            codev: "👩‍💻",
            author: "",
            friend: "👫",
            vip: "🌟",
            premiumUser: "🌟",
            mod: "🛡️",
            staff: "👥",
            supporter: "🌟",
            user: "<:member:1215181668969877525>",
        };
        this.helpMenu = {
            music: "<:icons_music:1211517896673730571>",
            home: "<:icons_home:1211517907297636382>",
            filters: "<:music_queue:1211517903132819496>",
            info: "<:icons_info:1211517904894558328>",
            utility: "<:icons_settings:1211517899026726913>",
            allCommands: "<:website_1:1211517914184949781>",
        };
        this.setup = {
            pause: "⏸️",
            resume: "▶️",
            skip: "⏭️",
            previous: "⏮️",
            shuffle: "🔀",
            author: "<:member:1215181668969877525>",
            nowPlaying: "🎶",
            requester: "<:member:1215181668969877525>",
            duration: "<a:duration:1215180499413368862>",
            stop: "⏹️",
            loop: "🔁",
            volLow: "🔉",
            volHigh: "🔊",
            fav: "⭐",
            autoplay: "🔄",
            filters: "<:music_queue:1211517903132819496>",
        };
        this.orasNew = {
            emote: "🎶",
            nowPlaying: "🎶",
            requester: "<:member:1215181668969877525>",
            duration: "<a:duration:1215180499413368862>",
            author: "<:member:1215181668969877525>",
            pause: "⏸️",
            resume: "▶️",
            skip: "⏭️",
            fav: "🌟",
            previous: "⏮️",
            stop: "⏹️",
        };
        this.spotify = {
            emote: "🎶",
            filters: "<:music_queue:1211517903132819496>",
            nowPlaying: "🎵",
            requester: "<:member:1215181668969877525>",
            duration: "<a:duration:1215180499413368862>",
            pause: "⏸️",
            author: "<:member:1215181668969877525>",
            resume: "▶️",
            stop: "⏹️",
            loop: "🔁",
            shuffle: "🔀",
            forward: "⏭️",
            backward: "⏮️",
            volLow: "🔉",
            volHigh: "🔊",
            previous: "⏮️",
            skip: "⏭️",
        };
        this.special = {
            emote: "🎶",
            nowPlaying: "🎶",
            requester: "<:member:1215181668969877525>",
            duration: "<a:duration:1215180499413368862>",
            pause: "⏸️",
            author: "<:member:1215181668969877525>",
            resume: "▶️",
            stop: "⏹️",
            loop: "🔁",
            shuffle: "🔀",
            forward: "⏭️",
            backward: "⏮️",
            volLow: "🔉",
            volHigh: "🔊",
            previous: "⏮️",
            skip: "⏭️",
        };
        this.noButtons = {
            emote: "🎶",
            nowPlaying: "<:member:1215181668969877525>",
            author: "<:member:1215181668969877525>",
            requester: "<:member:1215181668969877525>",
            duration: "<a:duration:1215180499413368862>",
            filters: "<:music_queue:1211517903132819496>",
        };
        this.simple = {
            emote: "🎶",
            nowPlaying: "<:member:1215181668969877525>",
            requester: "<:member:1215181668969877525>",
            author: "<:member:1215181668969877525>",
            duration: "<a:duration:1215180499413368862>",
            filters: "<:music_queue:1211517903132819496>",
            pause: "⏸️",
            resume: "▶️",
            stop: "⏹️",
            skip: "⏭️",
            loop: "🔁",
        };
        this.oldStyle = {
            emote: "🎶",
            nowPlaying: "<:member:1215181668969877525>",
            author: "<:member:1215181668969877525>",
            requester: "<:member:1215181668969877525>",
            duration: "<a:duration:1215180499413368862>",
        };
    }
}
