import styled from "styled-components";
import AgeGroupPriceList from "./components/AgeGroupPriceList";
import DefaultHeader from "./components/Header";


const Container = styled.div`
  width: 100vw;
  justify-content: center;
  display: flex;
  margin: 20px;
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
