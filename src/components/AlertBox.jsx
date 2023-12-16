import { Flex } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";


const AlertFlexBox = styled(Flex)`
  margin: 0px;
  padding: 15px 10px 3px 10px;
  color: #f55f21;
  background-color: #FBECEA;
  border-radius: 7px;
  font-size: 12px;
  position: relative;
  z-index: -1;
  top: -12px;
  
`;


function AlertBox({message}) {
    return <AlertFlexBox>{message}</AlertFlexBox>;
}

AlertBox.propTypes = {
    message: PropTypes.string.isRequired,
};

export default AlertBox;