import { Cards, Menu, Chart, Header, Sidebar } from "../../components";
import { useDashboard } from "../../hooks/useDashboard";
import * as S from "./dashboard.styled";

import { usePlaceholderUnitsData } from "../../hooks/usePlaceholderUnitsData";
import { usePlaceholderMonthData } from "../../hooks/usePlaceholderMonthData";

const Dashboard = () => {
  usePlaceholderUnitsData();
  usePlaceholderMonthData();
  const { units, generation } = useDashboard();
  
  return (
    <S.Container>
      <Sidebar />
      <Menu />
      <S.Content>
        <Header title="Dashboard"></Header>
        <Cards data1={units} data2={generation}></Cards>
        <Chart />
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
