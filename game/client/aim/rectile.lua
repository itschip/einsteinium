CreateThread(function()
	while true do
		Wait(0)
		
		if not IsPlayerFreeAiming(PlayerId()) and IsPedOnFoot(PlayerPedId()) then
			drawRectile()
		end
	end
end)

function drawRectile()
	DrawRect(0.5, 0.43, 0.0004, 0.02, 255, 255, 255, 100) -- vertical top
	DrawRect(0.5, 0.57, 0.0004, 0.02, 255, 255, 255, 100) -- vertical bottom
	
	DrawRect(0.47, 0.5, 0.01, 0.0010, 255, 255, 255, 100) -- horizontal left
	DrawRect(0.529, 0.5, 0.01, 0.0010, 255, 255, 255, 100) -- horizontal right
	
end