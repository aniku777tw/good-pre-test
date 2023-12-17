import { Flex, Button, Space } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import useAgeGroupPrice from "../hook/useAgeGroupPrice";
import AgeGroupPriceCard from "./AgeGroupPriceCard";

const AddPriceCardButton = styled(Button)`
  padding: 0px;
  margin-bottom: 20px;
  color: #27b7ab;
  &:not(:disabled):hover {
    color: #27b7ab !important;
    background-color: rgba(39, 183, 171, 0.1) !important;
  }
`;

function AgeGroupPriceList({ onChange }) {
  const [scroll, setScroll] = useState(null); // for scrolling
  const listRef = useRef(null);

  const {
    ageGroupPriceArray,
    addAgeGroupPrice,
    changeAgeGroupPrice,
    checkAgeGroupOverlap,
    deleteAgeGroupPrice,
    isAddButtonDisable,
  } = useAgeGroupPrice();

  const scrollListToEnd = () => {
    listRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
    setScroll(false);
  };

  useEffect(() => {
    scroll && scrollListToEnd();

    onChange(
      ageGroupPriceArray.map((data) => ({
        ageGroup: data.ageGroup,
        price: data.price,
      })) // remove key to match pre-test desired answer
    );
  }, [onChange, ageGroupPriceArray, scroll]);

  return (
    <Space direction="vertical" ref={listRef}>
      {ageGroupPriceArray.map((data, i) => (
        <AgeGroupPriceCard
          ageGroupPriceArray={ageGroupPriceArray}
          deleteAgeGroupPrice={deleteAgeGroupPrice}
          changeAgeGroupPrice={changeAgeGroupPrice}
          checkAgeGroupOverlap={checkAgeGroupOverlap}
          index={i}
          key={data.key}
        />
      ))}
      <Flex>
        <AddPriceCardButton
          type="text"
          onClick={() => {
            addAgeGroupPrice();
            setScroll(true);
          }}
          disabled={isAddButtonDisable()}
        >
          ＋新增價格設定
        </AddPriceCardButton>
      </Flex>
      <div></div>
    </Space>
  );
}

AgeGroupPriceList.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default AgeGroupPriceList;
