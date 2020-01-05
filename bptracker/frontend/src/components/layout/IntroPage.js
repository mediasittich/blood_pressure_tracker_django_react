import React from 'react';
import Container from '@material-ui/core/Container';
import GuestLinks from './GuestLinks';
import IntroHero from './IntroHero';

export default function IntroPage() {
    return (
        <div>
            <Container>
                <GuestLinks />
                <IntroHero />
            </Container>
        </div>
    );
};
