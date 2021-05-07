import React from 'react';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';

const Info = () => (
  <Container>
    <Hero titleText={settings.infoContents.title} image={settings.infoContents.image} />
    <p>{settings.infoContents.description}</p>
  </Container>
);

export default Info;
