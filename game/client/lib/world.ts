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

	async createVehicle(vehicle: string, coords: number[]) {
		const objectHash = GetHashKey(vehicle);
		RequestModel(objectHash);

		while (!HasModelLoaded(objectHash)) {
			await FiveM.Delay(100)
		}

		return CreateVehicle(objectHash, coords[0], coords[1], coords[2], 100, true, false);
	}

}

const World = new _World();

export default World;