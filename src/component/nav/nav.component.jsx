import React from 'react';
import { ULlist, NavContainer, LISTYLE, ALIGNLIST } from './nav.styles'

const Nav = () => {
    return (
        <NavContainer className="container">
            <div className="container">
                <ALIGNLIST>
                    <ULlist>
                        <LISTYLE>
                            <a href="" to='/Appointments'> Appointments</a>
                        </LISTYLE>
                        <LISTYLE>
                            <a href="" to='/Documents'>Documents </a>
                        </LISTYLE>
                        <LISTYLE>
                            <a href="" to='/Billing & Payments'>Billing & Payments </a>
                        </LISTYLE>
                    </ULlist>
                </ALIGNLIST>
            </div>
        </NavContainer>
    );
};

export default Nav;


