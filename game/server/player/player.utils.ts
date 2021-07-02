import TeamService from '../team/team.service';

export function selectTeam() {
  let chosenTeam: 'red' | 'blue';

  if (TeamService.blueTeam > TeamService.redTeam) {
    chosenTeam = 'red';
  } else if (TeamService.redTeam > TeamService.blueTeam) {
    chosenTeam = 'blue';
  } else {
    chosenTeam = 'blue';
  }

  TeamService.addPlayerToTeam(chosenTeam);
  return chosenTeam;
}
