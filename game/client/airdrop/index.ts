const delay = async (ms: number) => {
    return new Promise(res => setTimeout(res, ms))
}

onNet("airdrop:spawn", async function() {
    await spawnAirDrop()
})

const airDropSpawn = {
    planeModel: "bombushka",
    pilotModel: "s_m_m_pilot_02",
    spawnPoints: [
        {
            x: 6345.53, 
            y: -6669.08, 
            z: 238.43, 
            heading: 41.74,
            destination: {
                x: 3816.42,
                y: -3242.28, 
                z: 100.0, 
                heading: 32.69
            } 
        },
    ]
}

const randomAirSpawn = () => {
    const randomIndex = Math.floor(Math.random() * airDropSpawn.spawnPoints.length);
    return randomIndex; 
}

const spawnAirDrop = async () => {
    const chosenAirDrop = airDropSpawn.spawnPoints[randomAirSpawn()];
    const planeModel = airDropSpawn.planeModel;
    const pilotModel = airDropSpawn.pilotModel;

    // REQUEST_MODEL_PLANE
    RequestModel(GetHashKey(planeModel));

    while (!HasModelLoaded(GetHashKey(planeModel))) {
        await delay(10);
    }

    // CREATE PLANE
    const planeEnt = CreateVehicle(
        GetHashKey(planeModel),
        chosenAirDrop.x,
        chosenAirDrop.y,
        chosenAirDrop.z,
        chosenAirDrop.heading,
        true,
        true,
    );

    await delay(10);

    // REQUEST_MODEL_PILOT
    RequestModel(GetHashKey(pilotModel));

    while (!HasModelLoaded(GetHashKey(pilotModel))) {
        await delay(10);
    }

    // CREATE PILOT INSIDE PLANE
    const pilotEnt = CreatePedInsideVehicle(planeEnt, 0, GetHashKey(pilotModel), -1, true, true);

    SetVehicleForwardSpeed(planeEnt, 200);

    TaskPlaneMission(
        // https://pastebin.com/gx7Finsk
        pilotEnt, // pilot entity
        planeEnt, // plane entity
        0, // target vehicle
        0, // target ped
        chosenAirDrop.destination.x, 
        chosenAirDrop.destination.y, 
        chosenAirDrop.destination.z, 
        4, // missionFlag
        50.0, // angularDrag
        100.0, // unknown unk
        chosenAirDrop.destination.heading, 
        200.0, // maxZ
        100.0 // minZ
    );

    SetVehicleEngineOn(planeEnt, true, true, true); // Sets engine on plane ON
    ControlLandingGear(planeEnt, 3); // Sets the landing gear stage
    SetEntityInvincible(planeEnt, true); // Set the plane invincible to prevent people shooting it down
    SetEntityInvincible(pilotEnt, true); // Set the pilot to invincible

    emitNet("airdrop:start", planeEnt, pilotEnt);
} 
