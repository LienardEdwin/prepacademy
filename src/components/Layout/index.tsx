import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

const Header = styled.div `
  background-color: #60A5FA;
  display: flex;
  align-items: center;
  padding: 20px;
`

const Text = styled.h1 `
  color: #FFFF
`

const BackButton = styled.button `
  background-color: transparent;
  border: none;
  cursor: pointer;
`

function Layout(){
    const location = useLocation()

    return(
        <>
            <Header>
                <div>
                    {
                        location.pathname !== '/' && <Link to={'/'}>
                            <BackButton>
                                <span>Retour</span>
                            </BackButton>
                        </Link>
                    }
                </div>
                <div>
                    <Text>Movies</Text>
                </div>
            </Header>
        </>


    )
}

export default Layout