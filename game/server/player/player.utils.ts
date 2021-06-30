import TeamService from "../team/team.service";

export function selectTeam() {
	let chosenTeam: 'red' | 'blue'

	if (TeamService.blueTeam > TeamService.redTeam) {
		chosenTeam = 'red'
		TeamService.addPlayerToTeam('red')
	} else if (TeamService.redTeam > TeamService.blueTeam) {
		chosenTeam = 'blue'
		TeamService.addPlayerToTeam('blue')
	} else {
		chosenTeam = 'blue'
		TeamService.addPlayerToTeam('blue')
	}

	return chosenTeam;
}