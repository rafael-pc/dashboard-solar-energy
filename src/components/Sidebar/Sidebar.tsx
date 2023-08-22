import { FC } from "react";
import { Link } from "react-router-dom";
import { FaChartPie, FaChartBar, FaCog } from "react-icons/fa";
import * as S from "./Sidebar.styled";
import LogoMobile from "../../assets/logoMobile.png";
import LogoImage from "../../assets/logo.png";

const Sidebar: FC = () => {
  return (
    <S.Container>
      <S.Content>
        <nav>
          <Link to="/dashboard" className="link">
            <S.Logo src={LogoMobile} alt="logo" className="logo-mobile"/>
          </Link>
          <S.Menu>
            <S.Logo src={LogoImage} alt="logo" className="logo" data-testid="logo"/>
            <S.Page>
              <Link to="/dashboard" className="link">
                <FaChartPie className="chart-pie" />
                <h3>Dashboard</h3>
              </Link>
            </S.Page>
            <S.Page>
              <Link to="/units" className="link">
                <FaChartBar className="chart-bar" />
                <h3>Unidade consumidora</h3>
              </Link>
            </S.Page>
            <S.Page>
              <Link to="/register_month" className="link">
                <FaCog className="cog" />
                <h3>Cadastro de enérgia gerada</h3>
              </Link>
            </S.Page>
          </S.Menu>
        </nav>
      </S.Content>
    </S.Container>
  );
};

export default Sidebar;
