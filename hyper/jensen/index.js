module.exports.decorateConfig = config => {
  return Object.assign({}, config, {
    cursorColor: 'rgba(160, 66, 1, 0.5)',
    cursorAccentColor: '#141514',
    foregroundColor: '#D2D2D2',
    backgroundColor: '#141514',
    selectionColor: 'rgba(229, 93, 2, 0.09999999999999998)',
    borderColor: '#F5FFE5',
    colors: {
      black: '#141514',
      red: '#ED333C',
      green: '#EDA622',
      yellow: '#F7CF6F',
      blue: '#E55D02',
      magenta: '#EDA622',
      cyan: '#F5FFE5',
      white: '#D2D2D2',
      lightBlack: '#343534',
      lightRed: '#EDA622',
      lightGreen: '#EDA622',
      lightYellow: '#F7CF6F',
      lightBlue: '#E55D02',
      lightMagenta: '#EDA622',
      lightCyan: '#F5FFE5',
      lightWhite: '#F2F2F2',
    },
  });
};