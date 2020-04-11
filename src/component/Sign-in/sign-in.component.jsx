import React, { useState } from 'react';
import { FormInput } from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer,
    LinkOption
} from './sign-in.styles';
import Header from '../header/header.component'
const SignIn = () => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

    };

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    };

    return ( <>
        <div> <Header /></div>
        <SignInContainer className="container">
            <SignInTitle>Sign in to the client portal</SignInTitle>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <ButtonsBarContainer>
                    <CustomButton type='submit' to='/Appointments'> Log in </CustomButton>
                </ButtonsBarContainer>
                <LinkOption>Forgot your password?</LinkOption>

            </form>
        </SignInContainer>
        </>
    );
};
export default SignIn;
