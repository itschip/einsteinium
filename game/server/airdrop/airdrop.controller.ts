RegisterCommand("airdrop", async function(source: number, args: string[], rawCommand: string) {
    console.log("Airdrop incoming!")
    emitNet("airdrop:spawn", source);
}, false)

RegisterCommand("enablecayo", async function(source: number, args: string[], rawCommand: string) {
    console.log("Enabeling Cayo Perico")
    emitNet("EnableCayoPerico", source);
}, false)

onNet("airdrop:start", function(planeEnt: number, pilotEnt: number) {
    //const src = source;
    //console.log("source", src);
    console.log("planeEnt", planeEnt);
    console.log("pilotEnt", pilotEnt);

    //const planeNetId = NetworkGetNetworkIdFromEntity(planeEnt);
    //const pilotNetId = NetworkGetNetworkIdFromEntity(pilotEnt);
})