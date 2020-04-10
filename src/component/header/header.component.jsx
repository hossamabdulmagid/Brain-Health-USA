import React from 'react'
import { HeaderContainerPage, OptionLink, OptionsContainer, LinkOption } from './header.styles'
const Header = () => {
    return (
        <HeaderContainerPage>
            <div className="container">
                <OptionsContainer>
                    <OptionLink to='/'> Brain Health USA </OptionLink>
                    <LinkOption to='/'>Sign Out</LinkOption>
                </OptionsContainer>
            </div>
        </HeaderContainerPage>

    );
};

export default Header;