// This is a base template file!

terminal.initialise({
	"initMessage": "znci Version 1.0.0",
	"terminalContainer": ".console",
	"terminalInput": ".console .bottom input"
})

terminal.createCommand(
	[
		{
			"command": "help",
			"function": () => {
				return `Running help command`;
			}
		},
		{
			"command": "addition",
			"function": (args) => {

				const arguments = terminal.getArgs(args);

				if(!arguments[0] || !arguments[1]) {
					return `Please provide a number`;
				}

				const num1 = parseInt(arguments[0]);
				const num2 = parseInt(arguments[1]);

				return `Output: ${num1 + num2}`;
			}
		}
	]
)