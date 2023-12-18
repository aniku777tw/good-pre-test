import PropTypes from "prop-types";
import { Flex, Select, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";

import AlertBox from "./AlertBox";
import useAgeGroupSelect from "../hook/useAgeGroupSelect";

const SelectAddOn = styled(Space)`
  width: 11%;
  background-color: #fbfbfb;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  justify-content: center;
`;

const Selector = styled(Select)`
  width: 45%;
  .ant-select-selection-item {
    color: #646464;
  }
`;

const Compact = styled(Space.Compact)`
  width: 250px;
`;

function AgeGroupSelect({ ageGroup, onChange, isOverlap }) {

  const [status, setStatus] = useState("");
  const {
    startSelectorOptions,
    endSelectorOptions,
    startSelectorOnChange,
    endSelectorOnChange,
  } = useAgeGroupSelect(ageGroup, onChange);

  useEffect(() => {
    isOverlap ? setStatus("error") : setStatus("");
  }, [isOverlap]);

  return (
    <Flex>
      <Space direction="vertical">
        <Typography.Text type="secondary">年齡</Typography.Text>
        <Flex vertical>
          <Compact size="large">
            <Selector
              status={status}
              value={ageGroup[0]}
              options={startSelectorOptions}
              onSelect={(value) => startSelectorOnChange(value)}
            />
            <SelectAddOn>
              <Typography.Text type="secondary">~</Typography.Text>
            </SelectAddOn>
            <Selector
              status={status}
              value={ageGroup[1]}
              options={endSelectorOptions}
              onSelect={(value) => endSelectorOnChange(value)}
            />
          </Compact>
          {status && <AlertBox message="年齡區間不可重疊" />}
        </Flex>
      </Space>
    </Flex>
  );
}

AgeGroupSelect.propTypes = {
  ageGroup: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
  isOverlap: PropTypes.bool.isRequired,
};

export default AgeGroupSelect;
