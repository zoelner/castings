import React, { useEffect, useState } from 'react';

import Container from '../../components/Container';
import Header from '../../components/Header';
import List from '../../components/List';
import Sidebar from './Sidebar';

import { Wrapper, Section, ContentHeader, Content } from './styles';
import api from '../../services/api';

export default function Main() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function load() {
      const response = await api.get('/projects/1');

      setData(response.data);
    }

    load();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Sidebar />
        <Section>
          <ContentHeader>
            <h1>{data.name}</h1>
            <h2>{data.role}</h2>
          </ContentHeader>

          <Content>
            {data.boards &&
              data.boards.map(board => <List key={board.id} data={board} />)}
          </Content>
        </Section>
      </Wrapper>
    </Container>
  );
}
