import React from "react";
import { Container, Content } from "./Cards.styled";

interface Data1Item {
  status: string;
}

interface Data2Item {
  energia: number;
}

interface CardsProps {
  data1: Data1Item[];
  data2: Data2Item[];
}

const Cards: React.FC<CardsProps> = ({ data1, data2 }) => {
  const total = data2.reduce((acc, valor) => acc + valor.energia, 0) / data2.length;
  const ativo = data1.filter((unit) => unit.status === "ativo");
  const inativo = data1.filter((unit) => unit.status === "inativo");

  return (
    <Container>
      <Content>
        <div className="card">
          <div>
            <h3>Total unidades</h3>
            <span>{data1.length}</span>
          </div>
        </div>
        <div className="card">
          <div>
            <h3>Unidades ativas</h3>
            <span>{ativo.length}</span>
          </div>
        </div>
        <div className="card">
          <div>
            <h3>Unidades inativas</h3>
            <span>{inativo.length}</span>
          </div>
        </div>
        <div className="card">
          <div>
            <h3>Média de energia</h3>
            <span>{total.toFixed(0) + "W"}</span>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Cards;
