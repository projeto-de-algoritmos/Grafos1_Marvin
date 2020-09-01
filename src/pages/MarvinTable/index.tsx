import React, { useState } from 'react';

import { Matriz, Row, Column, Text, Container } from './styles';

const MarvinTable: React.FC = () => {
  const [celulas, setCelulas] = useState([
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ]);

  return (
    <>
      <Container>
        <Text>Marvin</Text>
        <Matriz>
          {celulas.map((row, i) => (
            <Row key={i}>
              {row.map((col, j) => (
                <Column key={j}>{col}</Column>
              ))}
            </Row>
          ))}
        </Matriz>
      </Container>
    </>
  );
};

export default MarvinTable;
