import OrasCommand from "../../abstract/OrasCommand.js";

export default class About extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "about";
        this.desc = "Provides you with the information of the bot";
        this.usage = "about";
        this.aliases = [];
        this.cat = "info";
        this.exec = async (message, args, prefix) => {
            const embed = {
                author: {
                    name: message.author.username,
                    iconURL: message.author.displayAvatarURL(),
                },
                title: "About",
                description: "This is a music bot.",
                footer: {
                    text: `Thanks For Selecting ${this.client.user.username}`,
                    iconURL: this.client.user.displayAvatarURL({ dynamic: true }),
                },
            };

            return message.reply({ embeds: [embed] });
        };
    }
}
