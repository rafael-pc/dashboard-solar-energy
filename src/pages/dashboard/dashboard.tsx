import { Cards, Menu, Chart, Header, Sidebar } from "../../components";
import { useDashboard } from "../../hooks/useDashboard";
import * as S from "./dashboard.styled";

const Dashboard = () => {
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
