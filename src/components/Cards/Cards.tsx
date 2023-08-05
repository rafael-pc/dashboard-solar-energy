import { FC } from "react";
import * as S from "./Cards.styled";

interface IData1Item {
  status: string;
}

interface IData2Item {
  energia: number;
}

interface ICardsProps {
  data1: IData1Item[];
  data2: IData2Item[];
}

const Cards: FC<ICardsProps> = ({ data1, data2 }) => {
  const total = data2.reduce((acc, valor) => acc + valor.energia, 0) / data2.length;
  const ativo = data1.filter((unit) => unit.status === "ativo");
  const inativo = data1.filter((unit) => unit.status === "inativo");

  return (
    <S.Container>
      <S.Content>
        <S.Card>
          <div>
            <h3>Total unidades</h3>
            <span>{data1.length}</span>
          </div>
        </S.Card>
        <S.Card>
          <div>
            <h3>Unidades ativas</h3>
            <span>{ativo.length}</span>
          </div>
        </S.Card>
        <S.Card>
          <div>
            <h3>Unidades inativas</h3>
            <span>{inativo.length}</span>
          </div>
        </S.Card>
        <S.Card>
          <div>
            <h3>Média de energia</h3>
            <span>{total.toFixed(0) + "W"}</span>
          </div>
        </S.Card>
      </S.Content>
    </S.Container>
  );
};

export default Cards;
