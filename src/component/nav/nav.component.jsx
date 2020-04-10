import React from 'react';
import { ULlist, NavContainer, LISTYLE, ALIGNLIST,LinkOption } from './nav.styles'

const Nav = () => {
    return (
        <NavContainer className="container">
            <div className="container">
                <ALIGNLIST>
                    <ULlist>
                        <LISTYLE>
                            <LinkOption to='/'> Appointments</LinkOption>
                        </LISTYLE>
                        <LISTYLE>
                            <LinkOption to='/documents'>Documents </LinkOption>
                        </LISTYLE>
                        <LISTYLE>
                            <LinkOption to='/bills'>Billing & Payments </LinkOption>
                        </LISTYLE>
                    </ULlist>
                </ALIGNLIST>
            </div>
        </NavContainer>
    );
};

export default Nav;


