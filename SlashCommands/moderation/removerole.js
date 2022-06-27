const { CommandInteraction, Client} = require("discord.js");

module.exports = {
    name: "remove-role",
    description: "Remove a role from a user",
    options: [
        {
            name: "user",
            description: "the user who looses the role",
            type: "USER",
            required: true
        },
        {
            name: "role",
            description: "role to be taken away",
            type: "ROLE",
            required: true
        },
        {
            name: "comment",
            description: "justify your decision",
            type: "STRING",
            required: false
        }
    ],

    /**
     * @param {Clinet} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        // get parameters
        const userToRank        = interaction.options.getMember("user");
        const role              = interaction.options.getRole("role");
        const description       = interaction.options.getString("comment");

        // additional parameters
        const roleAssigningUser = interaction.member;

        // confirm that the role to be given is lower than the role of the user calling the command
        if (role.position >= roleAssigningUser.roles.highest.position)
            return interaction.followUp("You have no permission to touch ranks on this server");

        userToRank.roles.remove(role.id);
        interaction.followUp(`${role} role was removed from ${userToRank}`);
    }
}
