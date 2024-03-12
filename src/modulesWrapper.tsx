import React from 'react';
import Header from './components/modules/Header';
import Footer from './components/modules/Footer';
import { Container } from './styles/container';

type ModulesWrapperProps = {
  children: JSX.Element;
};

const ModulesWrapper = ({ children }: ModulesWrapperProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default ModulesWrapper;
