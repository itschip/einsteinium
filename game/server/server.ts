import './player/player.controller'
import './team/team.controller'
import PlayerService from "./player/player.service";

const exp = (global as any).exports;

RegisterCommand('setteam', (src: number, args: string[], raw: string) => {
	const deaths = exp['einsteinium'].getDeaths(src)
	console.log('current deaths', deaths);

	exp['einsteinium'].setDeaths(src, 2);

	const newDeaths = exp['einsteinium'].getDeaths(src)
	console.log('current deaths', newDeaths);
}, false)

RegisterCommand('getallplayers', (src: number, args: string[], raw: string) => {
	console.log('all players', PlayerService.getAllPlayers())

	for (const player of PlayerService.getAllPlayers()) {
		console.log(player.getUsername())
	}
}, false)

