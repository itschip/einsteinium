CreateThread(function()
	ClearPlayerWantedLevel(PlayerId());
	SetMaxWantedLevel(0)
end)


local isAimingDownSights = false
CreateThread(function()
	
	while true do
		Wait(0)
		
		
		RestorePlayerStamina(PlayerId(), 1.0);
		
		if IsPedOnFoot(PlayerPedId()) then
			SetFollowPedCamViewMode(4)
			HideHudComponentThisFrame(14)
			-- Disables V
			DisableControlAction(0, 0, true);
			DisableControlAction(1, 0, true);
			DisableControlAction(2, 0, true);
		end
		
		if IsPlayerFreeAiming(PlayerId()) then
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
