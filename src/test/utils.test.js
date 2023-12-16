import Utils from "../utils/utils";

describe("addComma", () => {
  it("should add comma to numberStr", () => {
    const numberStr = "1234567890";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe("1,234,567,890");
  });

  it("should add comma to numberStr with .", () => {
    const numberStr = "1000000000.001";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe("1,000,000,000.001");
  });

  it("should add comma to numberStr with .000", () => {
    const numberStr = "1000000000.000";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe("1,000,000,000.000");
  });

  it("should return original string", () => {
    const numberStr = "123";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe("123");
  });

  it("should return empty string", () => {
    const numberStr = "";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe("");
  });
});

describe("getNumberIntervals", () => {
  it("should match test data 1", () => {
    const intervals = [
      [6, 11],
      [5, 8],
      [17, 20],
      [7, 7],
      [14, 17],
    ];
    const ans = {
      overlap: [
        [6, 8],
        [17, 17],
      ],
      notInclude: [
        [0, 4],
        [12, 13],
      ],
    };
    const { overlap, notInclude } = Utils.getNumberIntervals(intervals);
    expect(overlap).toEqual(ans.overlap);
    expect(notInclude).toEqual(ans.notInclude);
  });

  it("should match test data 2", () => {
    const intervals = [
      [0, 0],
      [0, 8],
      [17, 18],
      [7, 7],
      [14, 17],
    ];
    const ans = {
      overlap: [
        [0, 0],
        [7, 7],
        [17, 17],
      ],
      notInclude: [
        [9, 13],
        [19, 20],
      ],
    };

    const { overlap, notInclude } = Utils.getNumberIntervals(intervals);
    expect(overlap).toEqual(ans.overlap);
    expect(notInclude).toEqual(ans.notInclude);
  });

  it("should match test data 3", () => {
    const intervals = [
      [0, 10],
      [0, 8],
      [19, 20],
      [10, 10],
      [10, 17],
    ];
    const ans = {
      overlap: [
        [0, 8],
        [10, 10],
      ],
      notInclude: [[18, 18]],
    };

    const { overlap, notInclude } = Utils.getNumberIntervals(intervals);
    expect(overlap).toEqual(ans.overlap);
    expect(notInclude).toEqual(ans.notInclude);
  });

  it("should match test data 4", () => {
    const intervals = [
      [0, 20],
      [0, 20],
    ];
    const ans = {
      overlap: [[0, 20]],
      notInclude: [],
    };

    const { overlap, notInclude } = Utils.getNumberIntervals(intervals);
    expect(overlap).toEqual(ans.overlap);
    expect(notInclude).toEqual(ans.notInclude);
  });

  it("should match test data 5", () => {
    const intervals = [
      [0, 10],
      [11, 20],
    ];
    const ans = {
      overlap: [],
      notInclude: [],
    };

    const { overlap, notInclude } = Utils.getNumberIntervals(intervals);
    expect(overlap).toEqual(ans.overlap);
    expect(notInclude).toEqual(ans.notInclude);
  });
  it("should match test data 6", () => {
    const intervals = [
      [0, 11],
      [11, 20],
    ];
    const ans = {
      overlap: [[11, 11]],
      notInclude: [],
    };

    const { overlap, notInclude } = Utils.getNumberIntervals(intervals);
    expect(overlap).toEqual(ans.overlap);
    expect(notInclude).toEqual(ans.notInclude);
  });
});
