import PropTypes from "prop-types";
import styled from "styled-components";
import { Typography, Space, Flex, Input } from "antd";
import { useState, useLayoutEffect, useRef } from "react";

import Utils from "../utils/utils";
import AlertBox from "./AlertBox";

const StyledInputNumber = styled(Input)`
  width: 250px;
  .ant-input-group-addon {
    background-color: #fbfbfb;
  }
`;

function PriceInput({ price, onChange }) {
  const [status, setStatus] = useState("");
  const [numberStr, setNumberStr] = useState(0);
  const inputRef = useRef(null);
  const focused = useRef(null);

  const handleInputChange = (e) => {
    const noCommaNumberStr = e.target.value.replaceAll(/,/g, "");
    // check if the input is valid
    if (!/^(-)?(\d+)?(\.\d*)?$/.test(noCommaNumberStr) && noCommaNumberStr) {
      return;
    }

    onChange({
      price: e.target.value ? parseFloat(noCommaNumberStr) || 0 : null,
    });
    setNumberStr(Utils.addComma(noCommaNumberStr));

    noCommaNumberStr ? setStatus("") : setStatus("error");

    focused.current = [e.target.value, e.target.selectionStart];
  };

  const parseStringNumberOnComplete = (price) => {
    if (price === null) return;
    setNumberStr(Utils.addComma(price.toString()));
  };

  useLayoutEffect(() => {
    if (!focused.current) {
      return;
    }
    const [prevText, cursor] = focused.current;
    const prevCommaCount = prevText.split(",").length - 1;
    const currentCommaCount = numberStr.split(",").length - 1;
    const offset = currentCommaCount - prevCommaCount;
    const curr = cursor + offset;
    const pos = curr < 0 ? 0 : curr;
    inputRef.current.setSelectionRange(pos, pos);
  }, [numberStr]);

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">入住費用（每人每晚）</Typography.Text>
      <Flex vertical>
        <Space.Compact size="large">
          <StyledInputNumber
            addonBefore={
              <Typography.Text type="secondary">TWD</Typography.Text>
            }
            ref={inputRef}
            value={numberStr}
            onInput={(e) => handleInputChange(e)}
            onBlur={() => parseStringNumberOnComplete(price)}
            onPressEnter={() => parseStringNumberOnComplete(price)}
            placeholder="請輸入費用"
            status={status}
          />
        </Space.Compact>
        {status && <AlertBox message="不可以為空白" />}
      </Flex>
    </Space>
  );
}

PriceInput.propTypes = {
  price: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default PriceInput;
