
exports.min = function min (array) {
  if (array) {
    if (array.length !== 0) {
      let minVFalue = array[0];
      for (i = 1; i < array.length; ++i) {
        if (array[i] < minVFalue) minVFalue = array[i];
      }
      return minVFalue
    }
    else return 0;
  }
  else return 0;
}

exports.max = function max (array) { 
  if (array) {
    if (array.length !== 0) {
      let maxVFalue = array[0];
      for (i = 1; i < array.length; ++i) {
        if (array[i] > maxVFalue) maxVFalue = array[i];
      }
      return maxVFalue
    }
    else return 0;
  }
  else return 0;
  return 0;
}

exports.avg = function avg (array) {
  let sum = 0;
  if (array){
    if (array.length !== 0) {
      array.forEach(item => {
        sum += item;
      });
      return sum/array.length
    }
    else return 0;
  }
  else return 0;
}
