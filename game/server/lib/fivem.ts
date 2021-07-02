class _FiveM {
  async Delay(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
  }
}

const FiveM = new _FiveM();

export default FiveM;
