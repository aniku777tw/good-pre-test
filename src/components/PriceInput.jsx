import PropTypes from "prop-types";
import styled from "styled-components";
import { Typography, Space, Flex, Input } from "antd";
import { useState, useLayoutEffect, useRef } from "react";

import Utils from "../utils/utils";
import AlertBox from "./AlertBox";

const StyledInputNumber = styled(Input)`
  width: 250px;
`;

function PriceInput({ price, onChange }) {
  const [status, setStatus] = useState("");
  const [stringNumber, setStringNumber] = useState(0);
  const inputRef = useRef(null);
  const focused = useRef();

  const handleInputChange = (e) => {
    const noCommaStrNumber = e.target.value.replaceAll(/,/g, "");

    const checkInputCharRegex = /^(\d+)?(\.\d*)?$/;
    if (!checkInputCharRegex.test(noCommaStrNumber) && noCommaStrNumber) {
      return;
    }

    onChange({ price: e.target.value ? parseFloat(noCommaStrNumber) : null });
    setStringNumber(Utils.addComma(noCommaStrNumber));

    noCommaStrNumber ? setStatus("") : setStatus("error");

    focused.current = [e.target.value, e.target.selectionStart];
  };

  const parseStringNumberOnComplete = () => {
    if (!price) return;
    setStringNumber(Utils.addComma(price.toString()));
  };

  useLayoutEffect(() => {
    if (!focused.current) {
      return;
    }
    const [prevText, cursor] = focused.current;
    const prevCommaCount = prevText.split(",").length - 1;
    const currentCommaCount = stringNumber.split(",").length - 1;
    const offset = currentCommaCount - prevCommaCount;
    const curr = cursor + offset;
    const pos = curr < 0 ? 0 : curr;
    inputRef.current.setSelectionRange(pos, pos);
  }, [stringNumber]);

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
            value={stringNumber}
            onInput={(e) => handleInputChange(e)}
            onBlur={() => parseStringNumberOnComplete()}
            onPressEnter={() => parseStringNumberOnComplete()}
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
  price: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PriceInput;
