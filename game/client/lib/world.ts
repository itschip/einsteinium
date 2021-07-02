import FiveM from "./fivem";

class _World {
	async createObject(object: string, coords: number[]) {

		console.log('coords', coords)
		console.log('obj', object)

		const objectHash = GetHashKey(object);
		RequestModel(objectHash);

		while (!HasModelLoaded(objectHash)) {
			await FiveM.Delay(100)
		}

		return CreateObject(objectHash, coords[0], coords[1], coords[2], true, true, false);
	}

	async createVehicle(vehicle: string, coords: number[], spawnInVehicle = false): Promise<number> {
		const objectHash = GetHashKey(vehicle);
		RequestModel(objectHash);

		while (!HasModelLoaded(objectHash)) {
			await FiveM.Delay(100)
		}

		const veh = CreateVehicle(objectHash, coords[0], coords[1], coords[2], 100, true, false);

		if (spawnInVehicle) {
			TaskWarpPedIntoVehicle(PlayerPedId(), veh, -1);
		}

		return veh;
	}

}

const World = new _World();

export default World;