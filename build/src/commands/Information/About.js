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
                            .setDescription(``)                            .setFooter({
                                text: `Thanks For Selecting ${this.client.user.username}`,
                                iconURL: this.client.user.displayAvatarURL({ dynamic: true }),
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
