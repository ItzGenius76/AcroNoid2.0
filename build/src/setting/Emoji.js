export default class OrasEmoji extends Object {
    constructor(client) {
        super();
        this.tick = "<:tick_icons:1211517921864454214>";
        this.cross = "<:cross_1:1211499430239543337>";
        this.playing = "🎶";
        this.exclamation = "<:icons_question:1211517978277838909>";
        this.queue = "<:music_queue:1211517903132819496>";
        this.info = "<:icons_question:1211517978277838909>";
        this.defSearch = "🔍";
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
            user: "👤",
        };
        this.helpMenu = {
            music: "<:icons_music:1211517896673730571>",
            home: "<:icons_home:1211517907297636382>",
            filters: "<:music_queue:1211517903132819496>",
            info: "<:icons_question:1211517978277838909>",
            utility: "<:icons_settings:1211517899026726913>",
            allCommands: "<:website_1:1211517914184949781>",
        };
        this.setup = {
            pause: "⏸️",
            resume: "▶️",
            skip: "⏭️",
            previous: "⏮️",
            shuffle: "🔀",
            author: "👤",
            nowPlaying: "🎶",
            requester: "👤",
            duration: "⌛",
            stop: "⏹️",
            loop: "🔁",
            volLow: "🔉",
            volHigh: "🔊",
            fav: "⭐",
            autoplay: "🔄",
            filters: "🎛️",
        };
        this.orasNew = {
            emote: "🎶",
            nowPlaying: "🎶",
            requester: "👤",
            duration: "⌛",
            author: "👤",
            pause: "⏸️",
            resume: "▶️",
            skip: "⏭️",
            fav: "🌟",
            previous: "⏮️",
            stop: "⏹️",
        };
        this.spotify = {
            emote: "🎶",
            filters: "",
            nowPlaying: "🎵",
            requester: "👤",
            duration: "⌛",
            pause: "⏸️",
            author: "👤",
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
            requester: "👤",
            duration: "⌛",
            pause: "⏸️",
            author: "👤",
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
            nowPlaying: "👤",
            author: "👤",
            requester: "👤",
            duration: "⌛",
            filters: "",
        };
        this.simple = {
            emote: "🎶",
            nowPlaying: "👤",
            requester: "👤",
            author: "👤",
            duration: "⌛",
            filters: "",
            pause: "⏸️",
            resume: "▶️",
            stop: "⏹️",
            skip: "⏭️",
            loop: "🔁",
        };
        this.oldStyle = {
            emote: "🎶",
            nowPlaying: "👤",
            author: "👤",
            requester: "👤",
            duration: "⌛",
        };
    }
}
