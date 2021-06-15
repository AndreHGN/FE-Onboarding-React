import styled from 'styled-components';

const Logo = styled.img`
    display: block;
    margin: auto;
    height: auto;
    width: 500px;
    margin-bottom: 60px;
`;

function Header() {
    return (
        <Logo src="images/logo.png" alt="Logo da série Rick and Morty" />
    );
}

export default Header;