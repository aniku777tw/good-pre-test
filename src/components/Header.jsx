import { Space, Flex, Layout } from "antd";
import styled from "styled-components";

const StyledHeader = styled(Layout.Header)`
  background-color: #ffffff;
  border-bottom: 1px solid #d9d9d9;
  position: sticky;
  top: 0;
  z-index: 1500;
  width: 100%;
`;

function DefaultHeader() {
  return (
    <StyledHeader>
      <Space size="middle">
        <Flex>Good Admin</Flex>
        <a
          target="_blank"
          href="https://github.com/aniku777tw"
          rel="noreferrer"
        >
          Github
        </a>
      </Space>
    </StyledHeader>
  );
}

export default DefaultHeader;
