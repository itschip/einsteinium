RegisterCommand('weather', (src: number, args: string[]) => {
  NetworkOverrideClockTime(parseInt(args[0]), 0, 0);
}, false);
