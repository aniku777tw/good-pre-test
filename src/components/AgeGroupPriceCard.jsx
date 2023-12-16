import PropTypes from "prop-types";
import styled from "styled-components";
import { Typography, Divider, Flex, Button, Space } from "antd";

import PriceInput from "./PriceInput";
import AgeGroupSelect from "./AgeGroupSelect";

const Card = styled(Flex)`
  border: 0px;
  margin: 10px;
`;

const CardContainer = styled(Space)`
  width: 550px;
  height: 130px;
`;

const CardDivider = styled(Divider)`
  margin: 0px;
  margin-top: 10px;
`;

const DeletePriceCardButton = styled(Button)`
  padding: 0px;
`;

const StyledTitle = styled(Typography.Title)`
  &.ant-typography {
    color: #4b4b4b;
    margin: 0px;
  }
`;

function AgeGroupPriceCard({
  index,
  deleteAgeGroupPrice,
  changeAgeGroupPrice,
  ageGroupPriceArray,
  checkAgeGroupOverlap,
}) {
  const isOverlap = checkAgeGroupOverlap(index);
  return (
    <Card vertical>
      <CardContainer direction="vertical">
        <Flex justify="space-between" align="center">
          <StyledTitle level={4}>價格設定 - {index + 1}</StyledTitle>
          {index !== 0 && (
            <DeletePriceCardButton
              type="text"
              danger
              onClick={() => deleteAgeGroupPrice(index)}
            >
              ✕ 移除
            </DeletePriceCardButton>
          )}
        </Flex>
        <Flex justify="space-between">
          <AgeGroupSelect
            ageGroup={ageGroupPriceArray[index].ageGroup}
            onChange={(data) => changeAgeGroupPrice(index, data)}
            isOverlap={isOverlap}
          />
          <PriceInput
            price={ageGroupPriceArray[index].price}
            onChange={(data) => changeAgeGroupPrice(index, data)}
          />
        </Flex>
      </CardContainer>
      <Flex justify="flex-end">
        <Typography.Text type="secondary">輸入0表示免費</Typography.Text>
      </Flex>
      <CardDivider />
    </Card>
  );
}

AgeGroupPriceCard.propTypes = {
  index: PropTypes.number.isRequired,
  deleteAgeGroupPrice: PropTypes.func.isRequired,
  changeAgeGroupPrice: PropTypes.func.isRequired,
  ageGroupPriceArray: PropTypes.arrayOf(
    PropTypes.shape({
      ageGroup: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      price: PropTypes.number,
    }).isRequired
  ).isRequired,
  checkAgeGroupOverlap: PropTypes.func.isRequired,
};

export default AgeGroupPriceCard;
