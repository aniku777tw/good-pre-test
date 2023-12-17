import { useState } from "react";
import Utils from "../utils/utils";

export default function useAgeGroupPrice() {
  const [ageGroupPriceArray, setAgeGroupPriceArray] = useState([
    { key: new Date().getTime(), ageGroup: [0, 0], price: 0 },
  ]);

  const deleteAgeGroupPrice = (index) => {
    ageGroupPriceArray.splice(index, 1);
    setAgeGroupPriceArray([...ageGroupPriceArray]);
  };

  const addAgeGroupPrice = () => {
    setAgeGroupPriceArray([
      ...ageGroupPriceArray,
      { key: new Date().getTime(), ageGroup: [0, 0], price: 0 },
    ]);
    
  };

  const changeAgeGroupPrice = (index, data) => {
    ageGroupPriceArray[index] = { ...ageGroupPriceArray[index], ...data };
    setAgeGroupPriceArray([...ageGroupPriceArray]);
  };

  const checkAgeGroupOverlap = (index) => {
    const { overlap } = Utils.getNumberIntervals(
      ageGroupPriceArray.map(({ ageGroup }) => ageGroup)
    );
    const overlapList = overlap
      .map((o) => Utils.covertRangeToNumberArray(o))
      .flat();
    const currentAgeList = Utils.covertRangeToNumberArray(
      ageGroupPriceArray[index].ageGroup
    );
    const isOverlap = currentAgeList.some((age) => overlapList.includes(age));
    return isOverlap;
  };

  const isAddButtonDisable = () => {
    const { notInclude } = Utils.getNumberIntervals(
      ageGroupPriceArray.map(({ ageGroup }) => ageGroup)
    );
    return notInclude.length === 0;
  }

  return {
    deleteAgeGroupPrice,
    addAgeGroupPrice,
    changeAgeGroupPrice,
    checkAgeGroupOverlap,
    isAddButtonDisable,
    ageGroupPriceArray,
  };
}
