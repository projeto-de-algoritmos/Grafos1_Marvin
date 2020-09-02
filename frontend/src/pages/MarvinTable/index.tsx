import React, { useState, useCallback } from 'react';

import { Matriz, Row, Column, Text, Container, Logo } from './styles';
import logoImg from '../../assets/marvin.svg'
import stainImg from '../../assets/stain.svg';
import armchairImg from '../../assets/armchair.svg';
import sparckleImg from '../../assets/sparkle.svg';

interface Image{
  [key:number]: string;
}

const board = [
    [0, 3, 3, 3, 0],
    [0, 3, 2, 3, 0],
    [0, 2, 2, 3, 0],
    [0, 0, 0, 0, 2],
    [2, 2, 0, 0, 2],
  ];

const images: Image = {
  0 : stainImg,
  1 : logoImg,
  2 : sparckleImg,
  3 : armchairImg
}

const MarvinTable: React.FC = () => {
  const [celulas, setCelulas] = useState(board);
  const [isClean, setIsClean] = useState();
  const [position, setPosition] = useState();

  const task = useCallback((arr: any, newArray: any, newBoard: any): void => {
    setTimeout(function (): void {
      const positionNewArray = newArray[arr];
      // console.log(positionNewArray);
      for (let row = 0; row < newBoard.length; row += 1) {
        for (let col = 0; col < newBoard.length; col += 1) {
          if (positionNewArray[0] === row && positionNewArray[1] === col) {
            newBoard[row][col] = 1;
            setPosition([row, col]);
          }
        }
      }
    }, 2000 * arr);
  },[])

  const handleFloodFill = useCallback((i: number, j: number): void => {
    console.log(`row: ${i}, column:${j}`);
    const newArray = [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
      [4, 2],
      [4, 3],
      [0, 4],
      [1, 4],
      [2, 4]
    ];
    const newBoard = board;

    for (let arr = 0; arr < newArray.length; arr += 1) {
      task(arr, newArray, newBoard);
    }
  }, [])

  return (
    <>
      <Container>
        <Logo>
          <Text>Marvin</Text>
          <img src={logoImg} alt="Marvin" />
        </Logo>

        <Matriz>
          {celulas.map((row, i) => (
            <Row key={i}>
              {row.map((col, j) => (
                <Column
                key={j}
                onClick={() => handleFloodFill(i, j)}
                >
                  <img src={images[col]} alt="images"/>
                </Column>
              ))}
            </Row>
          ))}
        </Matriz>
      </Container>
    </>
  );
};

export default MarvinTable;
