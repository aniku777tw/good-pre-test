import { Space, Flex, Layout } from "antd";
import styled from "styled-components";

const StyledHeader = styled(Layout.Header)`
  background-color: #ffffff;
  border-bottom: 1px solid #d9d9d9;
  position: sticky;
  top: 0;
  z-index: 1500;
  width: 100vw;
`;

function DefaultHeader() {
  return (
    <StyledHeader>
      <Flex justify="space-between">
        <Flex>Antarctica Yo Good Admin</Flex>
        <Space size="large">
          <a
            target="_blank"
            href="https://github.com/aniku777tw/good-pre-test"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            target="_blank"
            href="https://www.cakeresume.com/e102777tw"
            rel="noreferrer"
          >
            Resume
          </a>
        </Space>
      </Flex>
    </StyledHeader>
  );
}

export default DefaultHeader;
