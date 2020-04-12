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


                <DIVV>  <img className="container" src="https://widget-cdn.simplepractice.com/assets/images/video-office-wide-694d661cd74e6814382504a66bf2f427.png" alt="" /> <SPAN>Telemedicine </SPAN> </DIVV>


            </HeaderContainerPage>

            <DIVVW className="container">
                <img className="container" src='https://maps.googleapis.com/maps/api/staticmap?&style=feature:poi|visibility:off&size=600x290&markers=color:0x0088cc|1225%20W%20190%20St.%20Suite%20280%20Gardena%20CA%2090248&key=AIzaSyBAEf51QxAS9vSe1GxifP1FgZ7w6gSfOGY' alt="" />
                <Span> Gardena Office <br />
                        1225 W 190 St. Suite 280 <br />
                            Gardena, CA 90248  </Span> <br />
                <LinkOption>Directions  </LinkOption>

            </DIVVW>
            <AnotherDiv className="container">
                <img className="container" src='https://maps.googleapis.com/maps/api/staticmap?&style=feature:poi|visibility:off&size=600x290&markers=color:0x0088cc|4541%20Delano%20St%20Van%20Nuys%20CA%2091411&key=AIzaSyBAEf51QxAS9vSe1GxifP1FgZ7w6gSfOGY' alt="" />
                <Span> Van Nuys Office <br />
                4541 Delano St <br />
                Van Nuys, CA 91411  <br />
                    <LinkOption>Directions  </LinkOption>   </Span>
            </AnotherDiv>
        </header>

    );
}
export default HomePage;