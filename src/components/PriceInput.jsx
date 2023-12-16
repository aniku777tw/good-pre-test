import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Typography, Space, InputNumber, Flex } from "antd";

import AlertBox from "./AlertBox";
import Utils from "../utils/utils";

const StyledInputNumber = styled(InputNumber)`
  width: 250px;
`;

function PriceInput({ price, onChange }) {
  const [status, setStatus] = useState("");

  const handleInputChange = (value) => {
    value ? setStatus("") : setStatus("error");
    onChange({ price: value ? parseFloat(value) : null });
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">入住費用（每人每晚）</Typography.Text>
      <Flex vertical>
        <Space.Compact size="large">
          <StyledInputNumber
            addonBefore={
              <Typography.Text type="secondary">TWD</Typography.Text>
            }
            value={price}
            formatter={(value) => Utils.addComma(value)}
            parser={(value) => Utils.inputParser(value)}
            onChange={(value) => handleInputChange(value)}
            placeholder="請輸入費用"
            controls={false}
            stringMode
            status={status}
          />
        </Space.Compact>
        {status && <AlertBox message="不可以為空白" />}
      </Flex>
    </Space>
  );
}

PriceInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  price: PropTypes.number,
};

export default PriceInput;
