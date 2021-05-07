import React from 'react';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';

const Faq = () => (
  <Container>
    <Hero titleText={settings.faqContents.title} image={settings.faqContents.image} />
    <h2>{settings.faqContents.question}</h2>
    <p>{settings.faqContents.answer}</p>
  </Container>
);
export default Faq;
