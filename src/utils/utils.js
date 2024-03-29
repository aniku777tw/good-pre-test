const addComma = (numberStr) => {
  const result = numberStr
    // .replace(/^0+(?=\d)/, "") // remove 0 in front of number => this kind of data will be parsed when onPressEnter, onBlur
    .replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,"); // add commas
  return result;
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

const BREAK_POINT = "600px"

const Utils = {
  addComma,
  getNumberIntervals,
  covertRangeToNumberArray,
  BREAK_POINT
};

export default Utils;
