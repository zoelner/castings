import React from 'react';

import Container from '../../components/Container';
import Header from '../../components/Header';
import List from '../../components/List';
import Sidebar from './Sidebar';

import { Wrapper, Section, ContentHeader, Content } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Sidebar />
        <Section>
          <ContentHeader>
            <h1>Katerina</h1>
            <h2>Main Role</h2>
          </ContentHeader>

          <Content>
            <List
              data={{
                done: true,
                title: 'Shortlist',
                creatable: true,
                cards: [
                  {
                    title: 'Lorem ipsum dor sit amed',
                    subtitle: 'Lorem ipsum dor sit amed',
                    user: 'https://api.adorable.io/avatars/40',
                  },
                  {
                    title: 'Lorem ipsum dor sit amed',
                    subtitle: 'Lorem ipsum dor sit amed',
                    user: 'https://api.adorable.io/avatars/40',
                  },
                ],
              }}
            />
            <List
              data={{
                done: true,
                title: 'Round',
                creatable: true,
                cards: [],
              }}
            />
            <List
              data={{
                done: true,
                title: 'Final Round',
                creatable: true,
                cards: [
                  {
                    title: 'Lorem ipsum dor sit amed',
                    subtitle: 'Lorem ipsum dor sit amed',
                    user: 'https://api.adorable.io/avatars/40',
                  },
                  {
                    title: 'Lorem ipsum dor sit amed',
                    subtitle: 'Lorem ipsum dor sit amed',
                    user: 'https://api.adorable.io/avatars/40',
                  },
                ],
              }}
            />
            <List
              data={{
                done: true,
                title: 'Except',
                creatable: true,
                cards: [
                  {
                    title: 'Lorem ipsum dor sit amed',
                    subtitle: 'Lorem ipsum dor sit amed',
                    user: 'https://api.adorable.io/avatars/40',
                  },
                  {
                    title: 'Lorem ipsum dor sit amed',
                    subtitle: 'Lorem ipsum dor sit amed',
                    user: 'https://api.adorable.io/avatars/40',
                  },
                ],
              }}
            />
          </Content>
        </Section>
      </Wrapper>
    </Container>
  );
}
