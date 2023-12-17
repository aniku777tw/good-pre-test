import Utils from "../utils";

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

  it("should return float number with 0", () => {
    const numberStr = "0.12312";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe("0.12312");
  });

  it("should return float number with . start", () => {
    const numberStr = ".12312";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe(".12312");
  });

  it("should return empty string", () => {
    const numberStr = "";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe("");
  });

  it("should return original negative string", () => {
    const numberStr = "-122222223";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe("-122,222,223");
  });

  it("should return original negative string 2", () => {
    const numberStr = "-1222222223";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe("-1,222,222,223");
  });


  it("should return original negative string 3", () => {
    const numberStr = "-12222222223";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe("-12,222,222,223");
  });

  it("should return original negative float", () => {
    const numberStr = "-1122222223.123";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe("-1,122,222,223.123");
  });

  it("should return original negative float 0", () => {
    const numberStr = "-0000.0";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe("-0,000.0");
  });

  it.skip("should return string without zero start", () => {
    const numberStr = "00123.12312";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe("123.12312");
  });

  it.skip("should return float number with a lot of 0s", () => {
    const numberStr = "0000000.12312";
    const commaNumber = Utils.addComma(numberStr);
    expect(commaNumber).toBe("0.12312");
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
