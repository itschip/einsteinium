plyData = {}

Citizen.CreateThread(function()
	while true do
		plyData.ped = PlayerPedId()
		plyData.playerId = PlayerId()
		plyData.coords = GetEntityCoords(plyData.ped)
		plyData.health = GetEntityHealth(plyData.ped)
		Wait(100)
	end
end)

CreateThread(function()
	ClearPlayerWantedLevel(PlayerId());
	SetMaxWantedLevel(0)
end)

local prLog = GetZoneFromNameId("PrLog")

local isAimingDownSights = false
CreateThread(function()
	while true do
		Wait(0)

    local coords = GetEntityCoords(PlayerPedId());
    
    --[[ ClearAreaOfProjectiles(coords, 50.0, true) ]]

    SetPlayerHomingRocketDisabled(PlayerId(), true)

		RestorePlayerStamina(plyData.playerId, 1.0);
		SetZoneEnabled(prLog, false) -- Removes Snowflakes from Cayo Perico

		if IsPedOnFoot(plyData.ped) then
			--[[ SetFollowPedCamViewMode(4) ]]
			--[[ HideHudComponentThisFrame(14) ]]
			-- Disables V
			DisableControlAction(0, 0, true)
			DisableControlAction(1, 0, true)
			DisableControlAction(2, 0, true)
		end

		if IsPlayerFreeAiming(plyData.playerId) then
			if not isAimingDownSights then
				SetControlNormal(0, 50, 1.0)
				isAimingDownSights = true
			else
				HudWeaponWheelIgnoreSelection()
				DisableControlAction(0, 50, true)
			end
		end

	end
end)


--[[const DICT = 'wpn_flare'
const PARTICLE_NAME = 'proj_heist_flare_trail';]]
-- Make some variables for the particle dictionary and particle name.
local dict = "scr_indep_fireworks"
local particleName = "scr_indep_firework_shotburst"

RegisterCommand('spark', function() 
-- Create a new thread.
  Citizen.CreateThread(function()
    -- Request the particle dictionary.
    RequestNamedPtfxAsset(dict)
    -- Wait for the particle dictionary to load.
    while not HasNamedPtfxAssetLoaded(dict) do
      Citizen.Wait(0)
    end

    -- Get the position of the player, this will be used as the
    -- starting position of the particle effects.
    local ped = PlayerPedId()
    local x,y,z = table.unpack(GetEntityCoords(ped, true))

    local a = 0
    while a < 25 do
      -- Tell the game that we want to use a specific dictionary for the next particle native.
      UseParticleFxAssetNextCall(dict)
      -- Create a new non-looped particle effect, we don't need to store the particle handle because it will
      -- automatically get destroyed once the particle has finished it's animation (it's non-looped).
     --[[  StartParticleFxLoopedAtCoord(particleName, x + 5.0, y + 5.0, z + 1.0, 0.0, 0.0, 0.0, 2.0, false, false, false, false) ]]
     StartNetworkedParticleFxNonLoopedOnEntity(particleName, PlayerPedId(), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, false, false, false)

      a = a + 1

      -- Wait 500ms before triggering the next particle.
      Citizen.Wait(500)
    end
  end)
end)


RegisterCommand('addcountm', function()
  local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
  SetAircraftCountermeasureCount(vehicle, 10)
end, false)