import styled from 'styled-components';
import JenkinsIcon from './components/icons/JenkinsIcon';

const StyledScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledJenkinsIcon = styled(JenkinsIcon)`
  width: 226px;
  height: 312px;
  margin: 10% auto 4rem auto;
`;

const StyledTitleText = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin: 0rem auto auto auto;
`;

const App = () => {
  return (
    <StyledScreenContainer>
      <StyledJenkinsIcon />
      <StyledTitleText>Jenkins Test</StyledTitleText>
    </StyledScreenContainer>
  );
};

export default App;

