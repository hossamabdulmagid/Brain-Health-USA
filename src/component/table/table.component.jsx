import React from 'react';
import {
    TH,
    Table,
    TR,
    TD,
    LinkOption
} from './table.styled';
const TableDoucments = () => {
    return (
        <div>
            <Table>
                <thead>
                    <TR>
                        <th>Completed</th>
                        <TH>Date completed</TH>
                    </TR>
                </thead>
                <tbody>
                    <TR>
                        <td>
                            <span>&#xf0f6;</span>
                            <LinkOption> Consent for Telehealth Consultation </LinkOption>
                        </td>
                        <TD>Apr 06, 2020</TD>
                    </TR>
                    <TR>
                        <td>
                            <span>&#xf0f6;</span>
                            <LinkOption> Notice of Privacy Practices	 </LinkOption>
                        </td>
                        <TD>Apr 06, 2020</TD>
                    </TR>
                    <TR>
                        <td>
                            <span>&#xf0f6;</span>
                            <LinkOption> Informed Consent for Psychotherapy </LinkOption>
                        </td>
                        <TD>Apr 06, 2020</TD>
                    </TR>
                    <TR>
                        <td>
                            <span>&#xf007;</span>
                            <LinkOption> Practice Policies	 </LinkOption>
                        </td>
                        <TD>Apr 06, 2020</TD>
                    </TR>
                    <TR>
                        <td>
                            <i class="fa fa-user">&#xf0f6;</i>
                            <LinkOption> Contact Info	 </LinkOption>
                        </td>
                        <TD>Apr 06, 2020</TD>
                    </TR>
                    <TR>
                        <td>
                            <i class="fa fa-user">&#xf0f6;</i>
                            <LinkOption> Standard Intake Questionnaire Template		 </LinkOption>
                        </td>
                        <TD>Apr 06, 2020</TD>
                    </TR>
                </tbody>
            </Table>
        </div>
    );
}


export default TableDoucments;