import React from 'react';

import { ContainerFooterPage, ContentPage, LinkOption, H3Stlye, H5Style } from './footer.styles'
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
                        <p>
                            1225 W 190 St. Suite 280
                            <br />
                            Gardena, CA 90248


                        </p>
                    </div>
                    <div className="col-3">
                        <H5Style>Phone</H5Style>
                        <p>(310) 515-8113 </p>
                    </div>

                </div>

            </div>
            <ContentPage>
                Online Booking and Client Portal Services provided by SimplePractice. Read the SimplePractice  <LinkOption>Privacy Policy</LinkOption>
            </ContentPage>
        </ContainerFooterPage>
    );
}


export default Footer;