import { Box, Heading, Text } from '@chakra-ui/react';
import type { HeadFC, PageProps } from 'gatsby';
import React from 'react';

import { TripsList, TripsMap } from '../components';
import PageBreadcrumb from '../layout/breadcrumb';

function IndexPage({}: PageProps): JSX.Element {
  return (
    <>
      <PageBreadcrumb items={[{ key: 'home', label: 'Accueil' }]} />
      <Box
        alignItems={['flex-start', 'flex-start', 'center']}
        display="flex"
        flexDirection="column"
        gap={4}
        maxWidth="80ch"
      >
        <Heading
          as="h1"
          color="green.500"
          fontSize="1.75rem"
          fontWeight={700}
          sx={{ textAlign: ['start', 'start', 'center'] }}
        >
          Découvrez nos voyages à vélo
        </Heading>
        <Text align={['start', 'start', 'center']}>
          Le cyclisme est un très bon moyen d'appécier la nature et de découvrir le patrimoine. Il
          permet de prendre son temps, d'être au calme, de s'arrêter quand on le souhaite pour
          profiter des paysages.
          <br />
          Nous avons la chance d'avoir un large réseau de véloroutes en France et en Europe, toutes
          plus différentes les unes que les autres. Nous avons déjà pû suivre le tracé de plusieurs
          lors de nos précédents voyages.
          <br />
          Le plus dur est de choisir laquelle emprunter pour le prochain !
        </Text>
      </Box>
      <TripsMap />
      <TripsList />
    </>
  );
}

export const Head: HeadFC = () => {
  return (
    <>
      <title>Nos voyages à vélo</title>
      <meta
        content="Nous avons la chance d'avoir un large réseau de véloroutes en France et en Europe. Découvrez celles que nous avons emprunté lors de nos voyages à vélo."
        name="description"
      />
    </>
  );
};

export default IndexPage;
