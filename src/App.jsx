import styled from "styled-components";
import AgeGroupPriceList from "./components/AgeGroupPriceList";
import DefaultHeader from "./components/Header";
import Utils from "./utils";

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 20px;
  @media (max-width: ${Utils.BREAK_POINT}) {
    flex-direction: column;
    width: 90%;
  }
`;

function App() {
  return (
    <div>
      <DefaultHeader/>
      <Container>
        <AgeGroupPriceList onChange={(value) => console.log(value)} />
      </Container>
    </div>
  );
}

export default App;
