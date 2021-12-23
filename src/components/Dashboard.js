import React from "react";
import styled from "styled-components";
import { useGetBlocks } from "../hooks/useGetBlocks";
import Block from "./Block";
import FAB from "./FAB";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px 0 20px;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #282c34;
`;

const FABContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 2;
`;

function Dashboard() {
  const { isLoading, blocks, refresh, updateAmrapReps, deleteBlock } =
    useGetBlocks();

  const changeAmrapReps = (blockId, weekNumber, exercise, amrapReps) => {
    updateAmrapReps(blockId, weekNumber, exercise, amrapReps);
    refresh();
  };

  const handleDeleteBlock = (blockId) => {
    deleteBlock(blockId);
    refresh();
  };

  const blockComponents = blocks.map((block) => (
    <Block
      key={block.id}
      data={block}
      changeAmrapReps={(weekNumber, exercise, amrapReps) =>
        changeAmrapReps(block.id, weekNumber, exercise, amrapReps)
      }
      deleteBlock={handleDeleteBlock}
    />
  ));

  return (
    <Container>
      {!isLoading && <Content>{blockComponents}</Content>}
      <FABContainer>
        <FAB />
      </FABContainer>
    </Container>
  );
}

export default Dashboard;
