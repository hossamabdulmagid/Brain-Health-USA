import React from 'react';
import { ContainerPageColor, H3Syled, ContainerContentPage, Phargraph, LinkOption, DivStyle, H4Style, Table, TH, TR, Container, DivRapperTable, HStyle } from './Bills.styles';
const Bills = () => {
    return (
        <ContainerPageColor>
            <ContainerContentPage>
                <div className="container">
                    <H3Syled>Billing & Payments </H3Syled>
                    <DivStyle>
                        <Phargraph> You have a credit of $1</Phargraph>
                    </DivStyle>
                </div>
                <H4Style>invoice(1)</H4Style>
                <div className="container">
                    <Table>
                        <thead>
                            <TR>
                                <TH> Date </TH>
                                <TH>Details </TH>
                                <TH>Charges</TH>
                                <TH> Payments</TH>
                                <TH>Balance</TH>
                            </TR>
                        </thead>
                    </Table>
                    <Container>
                        No pending invoices.
                         <LinkOption>View All </LinkOption>
                    </Container>
                    <DivRapperTable>
                        <HStyle>Statements(0)</HStyle> 
                    </DivRapperTable>
                    <DivRapperTable>
                        <HStyle>Insurance Reimbursement Statement (0) </HStyle> 
                    </DivRapperTable>
                    <DivRapperTable>
                        <HStyle>Acc History(0)</HStyle>
                    </DivRapperTable>
                </div>
            </ContainerContentPage>
        </ContainerPageColor>
    );
}
export default Bills;