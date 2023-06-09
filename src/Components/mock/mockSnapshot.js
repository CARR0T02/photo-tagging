import dreamcastImg from './mockAssets/pierre-roussel-dreamcast-phone2-min.jpg';
import gamecubeImg from './mockAssets/pierre-roussel-gamecube-phone2-black-min.jpg';
const mockDoc = {
  levelName: 'Dream Cast',
  levelURL: dreamcastImg,
  id: 'I1P4WKkb73AA6WKw7lmH',
  data: function () {
    return {
      levelName: this.levelName,
      levelURL: this.levelURL,
    };
  },
};

const mockDoc2 = {
  levelName: 'Game Cube',
  levelURL: gamecubeImg,
  id: 'm5gK5YIoN6ArPrNHYEZd',
  data: function () {
    return {
      levelName: this.levelName,
      levelURL: this.levelURL,
    };
  },
};

export const mockSnapshot = {
  docs: [mockDoc, mockDoc2, mockDoc, mockDoc2, mockDoc, mockDoc2, mockDoc],
};
