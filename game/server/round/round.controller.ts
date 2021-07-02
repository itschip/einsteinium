import RoundService from "./round.service";

RegisterCommand('startround', () => {
	const map = RoundService.getMap()
	emitNet('battlefield:zone:setupFlags', -1, map.objectives);
}, false)