import { TeamProps } from './team.interface';
import PlayerService from '../player/player.service';

class _TeamService {
  private redTeamAmount: number;
  private blueTeamAmount: number;

  constructor() {
    console.log('Team service started');
    this.blueTeamAmount = 0;
    this.redTeamAmount = 0;
  }

  get redTeam() {
    return this.redTeamAmount;
  }

  get blueTeam() {
    return this.blueTeamAmount;
  }

  addPlayerToTeam(team: 'red' | 'blue') {
    if (team === 'red') this.redTeamAmount = this.redTeamAmount + 1;
    if (team === 'blue') this.blueTeamAmount = this.blueTeamAmount + 1;
  }
}

const TeamService = new _TeamService();

export default TeamService;
