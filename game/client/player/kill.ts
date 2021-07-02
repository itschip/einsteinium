import FiveM from "../lib/fivem";

let killCamTick: any;

onNet('battlefield:kill:createKillCam', async (killerId: number, weaponName: string) => {
	const killCam = createKillCam(GetPlayerPed(GetPlayerFromServerId(killerId)));
	RenderScriptCams(true, false, 0, true, true);

	for (let i = 90; i >= 50; i -= 0.1) {
		console.log(i)
		SetCamFov(killCam, i);
		await FiveM.Delay(10);
	}

	setTimeout(() => {
		DestroyCam(killCam, false);
		RenderScriptCams(false, false, 0, true, true);
		SetEntityDrawOutline(GetVehiclePedIsIn(GetPlayerPed(GetPlayerFromServerId(killerId)), false), false)
		clearTick(killCamTick)
	}, 5000)

})

function createKillCam(entity: number) {
	const [x, y, z] = GetEntityCoords(PlayerPedId(), false);
	const camera = CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", x, y, z + 0.5, 0, 0, 0, 90, true, 2);
	PointCamAtEntity(camera, entity, 0, 0, 0, true);

	if (IsPedInAnyVehicle(entity, false)) {
		killCamTick = setTick(async () => {
			SetEntityDrawOutline(GetVehiclePedIsIn(entity, false), true)
			await FiveM.Delay(0)
		})
	}

	return camera;
}