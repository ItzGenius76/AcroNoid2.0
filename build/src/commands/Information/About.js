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
            return message
                    .reply({
                    embeds: [
                        this.client.utils
                            .embed()
                            .setTitle(`Type *>help* for more`)
                            .setDescription(`You can type >help for usable commands, if you can type >invite if you want this bot to be in your server\n\n<:owner_1:1212331707261390888> • **OWNERS**\nstorm_xd#0000\n<:command:1211358351234179092> • **DEVELOPERS**\nDhruv_xd#0000`)                            .setFooter({
                                text: `Thanks For Selecting ${this.client.user.username}`,
                                iconURL: this.client.user.displayAvatarURL({ dynamic: true }),
                            .setThumbnail(this.client.user.displayAvatarURL());
                            }),
                    ],
                    components: [
                        this.client.utils.actionRow([
                            this.client.utils.button(`link`, `Invite Me`, null, null, `${this.client.config.botinvite}`),
                            this.client.utils.button(`link`, `Support`, null, null, `${this.client.config.server}`),
                            this.client.utils.button(`link`, `Premium`, null, null, `${this.client.config.server}`),
                        ]),
                    ],
                })
        };
    }
}
//# sourceMappingURL=About.js.map
