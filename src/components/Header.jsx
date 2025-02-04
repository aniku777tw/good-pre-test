import { Button, Flex, Layout } from "antd";
import styled from "styled-components";
import { Dropdown } from "antd";

const StyledHeader = styled(Layout.Header)`
  background-color: #ffffff;
  border-bottom: 1px solid #d9d9d9;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100vw;
`;

const StyledDropdown = styled(Dropdown)`
  position: absolute;
  right: 20px;
`;

function DefaultHeader() {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          href="https://github.com/aniku777tw/good-pre-test"
          rel="noreferrer"
        >
          Github
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          href="https://www.cakeresume.com/e102777tw"
          rel="noreferrer"
        >
          Resume
        </a>
      ),
    },
  ];

  const handleButtonClick = ()=>{
    window.location.href = 'https://asiayo.com/zh-tw/';
  }
    

  return (
    <StyledHeader>
      <Flex
        justify="center"
        align="center"
        style={{ width: "100%", height: "100%" }}
      >
        <Button type="link" onClick={handleButtonClick}>Antarctica Yo Good Admin</Button>
        <StyledDropdown
          menu={{
            items,
          }}
        >
          <Button type="link">Info</Button>
        </StyledDropdown>
      </Flex>
    </StyledHeader>
  );
}

export default DefaultHeader;
