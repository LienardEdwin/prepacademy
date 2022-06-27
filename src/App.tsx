import React, {ReactNode} from 'react';
import Layout from "./components/Layout";
import styled from 'styled-components'
import GlobalStyle from './utils/styles/Global';

const MainContainer = styled.div `
  display: flex;
  justify-content: center;
`
const ChildrenContainer = styled.div `
  width: 50vw;
  @media only screen and (min-width:321px) and (max-width:1024px)
  {
    width: 100%;
    padding: 20px;
  }
`

type Props= {
  children?: ReactNode
}

function App(props:Props) {
  const {children} = props

  return (
    <div>
      <GlobalStyle/>
      <Layout/>
      <MainContainer>
        <ChildrenContainer>
          {children}
        </ChildrenContainer>
      </MainContainer>
    </div>

  );
}

export default App;