import React from 'react';
import Header from './Header';
import Message from './Message';

// import { Container } from './styles';

const Template: React.FC = ({children}) => {
  return (
  <>
  <Header />
  <Message />
  {children}
  </>
    );
}

export default Template;