import { GameEvents } from "../../shared/events";
import TeamService from "./team.service";

on(GameEvents.ASSIGN_PLAYER_TO_TEAM, (src: number) => {
	
})

function assignPlayerToTeam(src: number) {
	console.log('i got the source', src);

	TeamService.handleAssignTeam(src)
}

global.exports('assignPlayerToTeam', assignPlayerToTeam);