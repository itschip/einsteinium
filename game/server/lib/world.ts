class _World {
  async createObject(object: string, coords: number[]) {
    return CreateObject(GetHashKey(object), coords[0], coords[1], coords[2], true, true, false);
  }
}

const World = new _World();

export default World;