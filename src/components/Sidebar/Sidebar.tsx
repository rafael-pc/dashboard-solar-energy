import React from "react";
import { Link } from "react-router-dom";
import { FaChartPie, FaChartBar, FaCog } from "react-icons/fa";
import { Container, Content, Logo, Menu, Page } from "./Sidebar.styled";
import LogoMobile from "../../assets/logoMobile.png";
import LogoImage from "../../assets/logo.png";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard" className="link">
            <Logo src={LogoMobile} alt="logo" className="logo-mobile"></Logo>
          </Link>
          <Menu>
            <Logo src={LogoImage} alt="logo" className="logo"></Logo>
            <Page>
              <Link to="/dashboard" className="link">
                <FaChartPie className="chart-pie" />
                <h3>Dashboard</h3>
              </Link>
            </Page>
            <Page>
              <Link to="/units" className="link">
                <FaChartBar className="chart-bar" />
                <h3>Unidade consumidora</h3>
              </Link>
            </Page>
            <Page>
              <Link to="/register_month" className="link">
                <FaCog className="cog" />
                <h3>Cadastro de enérgia gerada</h3>
              </Link>
            </Page>
          </Menu>
        </nav>
      </Content>
    </Container>
  );
};

export default Sidebar;
