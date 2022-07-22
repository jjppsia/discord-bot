# A very simple discord bot to integrate on your server

---

1. Create your **.env** file and include your DISCORD_TOKEN in it <br>
`DISCORD_TOKEN=your_token_here` 

2. Create your **config.json** file to set up your **clientId, guildId, token.** <br>
```
{
  "clientId": "your_clientId_here",
  "guildId": ["guildId", "add_another_guildId_you_want"],
  "token": "your_token_here"
}
```

3. Create **data.js** file under the **commands** folder to set up your server slash commands. Just follow the format. <br>
```
const data = [
  {
    commandName: 'hello',
    description: 'Say hello to the channel.',
    reply: 'Hello, everyone!.',
  },
  {
    commandName: 'your_command_name_here',
    description: 'command_description',
    reply: 'command_reply',
  },
  {
    commandName: 'your_command_name_here',
    description: 'command_description',
    reply: 'command_reply',
  },
];

module.exports = data;
```
