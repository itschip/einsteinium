import { TeamProps } from "./team.interface";
import PlayerService from "../player/player.service";

class _TeamService {
	private readonly redTeamMap: Map<number, TeamProps>;
	private readonly blueTeamMap: Map<number, TeamProps>;

	constructor() {
		console.log('Team service started');
		this.blueTeamMap = new Map<number, TeamProps>()
		this.redTeamMap = new Map<number, TeamProps>()
	}

	 handleAssignTeam(src: number) {
		const Player = PlayerService.getPlayer(src);
		this.blueTeamMap.set(src, { username: Player.getUsername(), deaths: 0, kills: 0 });

		const player = this.blueTeamMap.get(src);

		console.log(this.blueTeamMap.get(src));
	 }

}

const TeamService = new _TeamService();

export default TeamService;