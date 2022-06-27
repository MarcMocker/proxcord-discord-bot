const { CommandInteraction, Client} = require("discord.js");

module.exports = {
    name: "help",
    description: "gives some information about the bot",

    /**
     * @param {Clinet} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content:
            "**Proxcord admin bot**\ntype \`/\` to get an overview about the valid commands" });
    }
}
