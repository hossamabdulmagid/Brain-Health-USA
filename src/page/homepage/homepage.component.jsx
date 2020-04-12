import React from 'react';
import { LinkOption, DIV, HeaderContainerPage, H1Style, DIVV, BUTTONLINK, DIVVW, SPAN, Span, AnotherDiv } from './homepage.styles'


const HomePage = () => {
    return (
        <header>
            <div className="container">
                <DIV>
                    Existing Client? <LinkOption to='/signin'>  Sign In </LinkOption>
                </DIV>
            </div>
            <HeaderContainerPage>
                <DIV> <H1Style>Brain Health USA </H1Style> </DIV>
                <BUTTONLINK to="/signin">  I’m an Existing Client </BUTTONLINK>


                <DIVV>  <img className="container" src="./video.jpg" alt="" /> <SPAN>Telemedicine </SPAN> </DIVV>


            </HeaderContainerPage>

            <DIVVW className="container">
                <img className="container" src='./staticmap.png' alt="" />
                <Span> Gardena Office <br />
                        1225 W 190 St. Suite 280 <br />
                            Gardena, CA 90248  </Span> <br />
                <LinkOption>Directions  </LinkOption>

            </DIVVW>
            <AnotherDiv className="container">
                <img className="container" src='./staticmap.jpg' alt="" />
                <Span> Van Nuys Office <br />
                4541 Delano St <br />
                Van Nuys, CA 91411  <br />
                    <LinkOption>Directions  </LinkOption>   </Span>
            </AnotherDiv>
        </header>

    );
}
export default HomePage;