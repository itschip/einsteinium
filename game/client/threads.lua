plyData = {}

Citizen.CreateThread(function()
	while true do
		plyData.ped = PlayerPedId()
		plyData.playerId = PlayerId()
		playerData.coords = GetEntityCoords(plyData.ped)
		playerData.health = GetEntityHealth(plyData.ped)
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
		
		RestorePlayerStamina(plyData.playerId, 1.0);
		SetZoneEnabled(prLog, false) -- Removes Snowflakes from Cayo Perico
		
		if IsPedOnFoot(plyData.ped) then
			SetFollowPedCamViewMode(4)
			HideHudComponentThisFrame(14)
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
