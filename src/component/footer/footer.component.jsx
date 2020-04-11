import React from 'react';

import { ContainerFooterPage, ContentFooter, LinkOption, H3Stlye, H5Style, Pharagraph } from './footer.styles'
const Footer = () => {
    return (
        <ContainerFooterPage>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <H3Stlye> Brain Health USA </H3Stlye>

                    </div>

                    <div className="col-3">
                        <H5Style>Gardena Office</H5Style>
                        <Pharagraph>
                            1225 W 190 St. Suite 280
                                    <br />
                                    Gardena, CA 90248
                        </Pharagraph>
                    </div>
                    <div className="col-3">
                        <H5Style>Phone</H5Style>
                        <Pharagraph>(310) 515-8113 </Pharagraph>
                    </div>

                </div>

            </div>
            <ContentFooter>
                Online Booking and Client Portal Services provided by SimplePractice. Read the SimplePractice  <LinkOption>Privacy Policy</LinkOption>
            </ContentFooter>
        </ContainerFooterPage>
    );
}


export default Footer;