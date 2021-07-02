let isNightVisionOn = false;
RegisterKeyMapping('+nightvision', 'Sets night vision on player', 'keyboard', 'n');
RegisterCommand(
  '+nightvision',
  () => {
    isNightVisionOn = !isNightVisionOn;
    SetNightvision(isNightVisionOn);
  },
  false,
);
