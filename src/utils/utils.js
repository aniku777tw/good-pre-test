const addComma = (numberStr) => {
  const [integerPart, decimalPart] = numberStr.split(".");
  const integerPartWithComma = integerPart.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  const parsedDecimalPart = decimalPart ? `.${decimalPart}` : "";
  const result = `${integerPartWithComma}${parsedDecimalPart}`;
  return result;
};

const inputParser = (numberStr) => {
  return numberStr.replace(/\$\s?|(,*)/g, "");
};

const getNumberIntervals = (intervals) => {
  const countMap = {};
  [...Array(21).keys()].forEach((age) => Object.assign(countMap, { [age]: 0 }));

  intervals.forEach((range) => {
    const [start, end] = range;
    for (let age = start; age <= end; age++) {
      countMap[age] += 1;
    }
  });

  const overlapList = [];
  const notIncludeList = [];

  Object.keys(countMap).forEach((key) => {
    if (countMap[key] === 0) {
      notIncludeList.push(parseInt(key));
    }
    if (countMap[key] > 1) {
      overlapList.push(parseInt(key));
    }
  });

  const overlap = findMinMaxRanges(overlapList);
  const notInclude = findMinMaxRanges(notIncludeList);

  return { overlap, notInclude };
};

const covertRangeToNumberArray = (range) => {
  const [start, end] = range;
  const array = [];
  for (let age = start; age <= end; age++) {
    array.push(age);
  }
  return array;
};

const findMinMaxRanges = (numberArray) => {
    const result = [];
    let startNum, endNum;
    for (const num of numberArray) {
      if (endNum === undefined || num !== endNum + 1) {
        startNum = num;
        endNum = num;
      } else {
        endNum = num;
      }
      if (!numberArray.includes(num + 1)) {
        result.push([startNum, endNum]);
      }
    }
    return result;
  };

const Utils = {
  addComma,
  getNumberIntervals,
  inputParser,
  covertRangeToNumberArray,
};

export default Utils;
