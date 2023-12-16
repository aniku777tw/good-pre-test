import { useState } from "react";
import Utils from "../utils/utils";

export default function useAgeGroupPrice() {
  const [ageGroupPriceArray, setAgeGroupPriceArray] = useState([
    { key: new Date().getTime(), ageGroup: [0, 0], price: 0 },
  ]);
  const [isAdd, setIsAdd] = useState(null); // for scrolling

  const deleteAgeGroupPrice = (index) => {
    setIsAdd(false);

    ageGroupPriceArray.splice(index, 1);
    setAgeGroupPriceArray([...ageGroupPriceArray]);
  };

  const addAgeGroupPrice = () => {
    setIsAdd(true);

    setAgeGroupPriceArray([
      ...ageGroupPriceArray,
      { key: new Date().getTime(), ageGroup: [0, 0], price: 0 },
    ]);
    
  };

  const changeAgeGroupPrice = (index, data) => {
    setIsAdd(false);

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

  return {
    deleteAgeGroupPrice,
    addAgeGroupPrice,
    changeAgeGroupPrice,
    checkAgeGroupOverlap,
    ageGroupPriceArray,
    isAdd,
  };
}
