import React from 'react';
import { ContainerPageColor, H3Syled, ContainerContentPage, Phargraph } from './Documents.styles'
import TableDoucments from '../table/table.component';
import Nav from '../nav/nav.component'
import Header from '../header/header.component'
const Documents = () => {
    return (
        <ContainerPageColor>
            <Header />
            <Nav />
            <ContainerContentPage>
                <div className="container">
                    <H3Syled> Documents, Forms and Files </H3Syled>
                    <Phargraph>No pending documents at this time.</Phargraph>
                </div>
                <div className="container">
                    <TableDoucments />
                </div>
            </ContainerContentPage>
        </ContainerPageColor>
    );
}
export default Documents;