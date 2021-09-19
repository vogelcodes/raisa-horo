import { Box, Link, SimpleGrid, SimpleGridProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading'

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid spacing="2rem" columns={2} {...props}>
    <Box>
      <FooterHeading mb="4">Consultorias</FooterHeading>
      <Stack>
        <Link>Amamentação</Link>
        <Link>Pré Natal</Link>
        <Link>Retorno ao Trabalho</Link>
      </Stack>
    </Box>
    <Box >
      <FooterHeading mb="4">Sobre Mim</FooterHeading>
      <Stack>
        <Link>Formações</Link>
        <Link>Eventos</Link>
        <Link>Cursos</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)
