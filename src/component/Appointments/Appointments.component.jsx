import React from 'react';
import { H3Syled, ContainerPageColor, ContainerContentPage, ALIGNLIST, ULlist, LISTYLE, LinkOption, Phargraph } from './Appointments.styles'
import Nav from '../nav/nav.component'
import Header from '../header/header.component'
const Appointments = () => {
    return (
        <ContainerPageColor>
            <Header />
            <Nav />

            <ContainerContentPage>
                <div className="container">
                    <H3Syled> Appointments  </H3Syled>
                    <ALIGNLIST className="container">
                        <ULlist>
                            <LISTYLE>
                                <LinkOption>Upcoming</LinkOption>
                            </LISTYLE>
                            <LISTYLE>
                                <LinkOption>Requested</LinkOption>
                            </LISTYLE>
                        </ULlist>
                    </ALIGNLIST>
                    <Phargraph className="container">No appointments.</Phargraph>
                </div>
            </ContainerContentPage>
        </ContainerPageColor>
    );
}
export default Appointments;