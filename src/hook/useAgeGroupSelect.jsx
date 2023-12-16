import { useState } from "react";

export default function useAgeGroupSelect(ageGroup, onChange) {
  const [currentStart, currentEnd] = ageGroup;
  const defaultOptions = [...Array(21).keys()].map((number) => ({
    value: number,
    label: number,
    disabled: false,
  }));

  const [startSelectorOptions, setStartSelectorOptions] =
    useState(defaultOptions);
  const [endSelectorOptions, setEndSelectorOptions] = useState(defaultOptions);

  const startSelectorOnChange = (value) => {
    const options = defaultOptions.map((option) =>
      option.value >= value
        ? { ...option, disabled: false }
        : { ...option, disabled: true }
    );

    if (value >= currentEnd) {
      onChange({ ageGroup: [value, value] });
    } else {
      onChange({ ageGroup: [value, currentEnd] });
    }
    setEndSelectorOptions(options);
  };

  const endSelectorOnChange = (value) => {
    const options = defaultOptions.map((option) =>
      option.value <= value
        ? { ...option, disabled: false }
        : { ...option, disabled: true }
    );
    onChange({ ageGroup: [currentStart, value] });
    setStartSelectorOptions(options);
  };
  return {
    startSelectorOptions,
    endSelectorOptions,
    startSelectorOnChange,
    endSelectorOnChange,
  };
}
