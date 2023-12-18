import { Flex, Button, Space } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useEffect, useRef } from "react";

import useAgeGroupPrice from "../hook/useAgeGroupPrice";
import AgeGroupPriceCard from "./AgeGroupPriceCard";
import useScroll from "../hook/useScroll";

const AddCardButton = styled(Button)`
  padding: 0px;
  margin-bottom: 20px;
  color: #27b7ab;
  &:not(:disabled):hover {
    color: #27b7ab !important;
    background-color: rgba(39, 183, 171, 0.1) !important;
  }
`;

function AgeGroupPriceList({ onChange }) {
  const listRef = useRef(null);
  const { setScroll } = useScroll(listRef);

  const {
    ageGroupPriceArray,
    addAgeGroupPrice,
    changeAgeGroupPrice,
    checkAgeGroupOverlap,
    deleteAgeGroupPrice,
    isAddButtonDisable,
  } = useAgeGroupPrice();

  useEffect(() => {
    onChange(
      ageGroupPriceArray.map((data) => ({
        ageGroup: data.ageGroup,
        price: data.price,
      })) // remove key to match pre-test desired answer
    );
  }, [onChange, ageGroupPriceArray]);

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
        <AddCardButton
          type="text"
          onClick={() => {
            addAgeGroupPrice();
            setScroll(true);
          }}
          disabled={isAddButtonDisable()}
        >
          ＋新增價格設定
        </AddCardButton>
      </Flex>
    </Space>
  );
}

AgeGroupPriceList.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default AgeGroupPriceList;
