onNet('battlefield:vehicle:updateCountermeasures', (playerJet: number) => {
  console.log('jet', playerJet);

  Entity(NetworkGetEntityFromNetworkId(playerJet)).state.set('usedCountermeasures', true, true);

   setTimeout(() => {
    Entity(NetworkGetEntityFromNetworkId(playerJet)).state.set('usedCountermeasures', false, false);
  }, 5000);
});
