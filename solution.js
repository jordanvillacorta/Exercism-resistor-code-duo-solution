var bandColors = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
};
  
export function decodedValue(colors) {
    let container = [];
    for (let i = 0; i < colors.length; i++) {
      if (bandColors[colors[i]] !== undefined) {
        container.push(bandColors[colors[i]]); 
      }
      if (container.length === 2) {
        break;
      }
    }
    return Number(container.join(''));
  };