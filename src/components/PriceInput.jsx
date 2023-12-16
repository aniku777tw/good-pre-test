import PropTypes from "prop-types";
import styled from "styled-components";
import { Typography, Space, Flex, Input } from "antd";
import { useState } from "react";

import Utils from "../utils/utils";
import AlertBox from "./AlertBox";

const StyledInputNumber = styled(Input)`
  width: 250px;
`;

function PriceInput({ onChange }) {
  const [status, setStatus] = useState("");
  const [stringNumber,setStringNumber] = useState(0);

  const handleInputChange = (e) => {
    
    const noCommaStrNumber =e.target.value.replaceAll(/,/g, '')

    const checkInputCharRegex = /^\d+(\.\d*)?$/;
    if(!checkInputCharRegex.test(noCommaStrNumber) && noCommaStrNumber){
        return
    }

    onChange({ price: e.target.value ? parseFloat(noCommaStrNumber) : null });
    setStringNumber(Utils.addComma(noCommaStrNumber))

    noCommaStrNumber ? setStatus("") : setStatus("error");
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
            value={stringNumber}
            onChange={(e) => handleInputChange(e)}
            placeholder="請輸入費用"
            controls={false}
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
};

export default PriceInput;
