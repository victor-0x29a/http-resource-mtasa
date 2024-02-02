# http-resource-mtasa

## Configuration
- Ensure the default TCP port in `mtaserver.conf` is set to `22005`.
- Create a user in the server's admin ACL and add their details to the `.env` file in the `Node API` folder (username in `MTASAUSER` field, password in `MTASAPASS` field).
- In the `.env` file in the `Node API` folder, set the server's IP address in the `MTASAHOST` field and the previously configured TCP port in the `MTASAPORT` field.

## Adding Commands
- To add new commands, go to the `resource` folder and navigate to the `config` folder. There, you'll find a table containing functions.
- Add a new function by placing a comma after the last function and adding its name within square brackets. Create a function with the referenced name inside the brackets, using the ellipsis (`...`) as the main argument to indicate it's a table.
- Define the arguments for the new function. For example, to set the time, create a variable taking the hour as the first argument from `args`. Use `setTime(hour, 0)` and return a message.
- After adding the function, include it in the API list by going to the `commands.ts` file in the `src/config` directory. Add a new object inside the `commands` array, specifying ID, NAME, DESCRIPTION, and ARGS.

## Join the B.R.R Community
[<img alt="Discord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" />](https://discord.gg/3XeQBzNMHz)
