import { ChakraBaseProvider } from '@chakra-ui/react';
import { WrapPageElementBrowserArgs, WrapRootElementBrowserArgs } from 'gatsby';
import React from 'react';

import Layout from './src/layout';
import theme from './src/theme';

export function wrapPageElement({ element }: WrapPageElementBrowserArgs) {
  return <Layout element={element} />;
}

export function wrapRootElement({ element }: WrapRootElementBrowserArgs) {
  return <ChakraBaseProvider theme={theme}>{element}</ChakraBaseProvider>;
}
