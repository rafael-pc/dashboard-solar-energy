import { Link } from "react-router-dom";
import { Header, Menu, Button, Sidebar } from "../../components";
import { useListUnits } from "../../hooks/useListUnits";
import * as S from "./listUnits.styled";

const ListUnits = () => {
  const { data, removeItemFromLocalStorage } = useListUnits();

  return (
    <S.Container>
      <Sidebar />
      <Menu />
      <S.Content>
        <Header title="Unidades"></Header>
        <h3>Cadastro de Unidade Geradora</h3>
        <S.Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Apelido</th>
              <th>Local</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) ? (
              data.map((unit, index) => (
                <S.Row key={index}>
                  <td>{unit.id}</td>
                  <td>{unit.apelido}</td>
                  <td>{unit.local}</td>
                  <td>{unit.marca}</td>
                  <td>{unit.modelo}W</td>
                  <td>
                    <Link to={`/edit/${unit.id}`}>
                      <S.Edit>editar</S.Edit>
                    </Link>
                  </td>
                  <td>
                    <S.Delete
                      onClick={() => {
                        removeItemFromLocalStorage(unit.id);
                      }}
                    >
                      apagar
                    </S.Delete>
                  </td>
                </S.Row>
              ))
            ) : (
              <tr>
                <td colSpan={2}>Nenhum dado encontrado.</td>
              </tr>
            )}
          </tbody>
        </S.Table>
        <Link to="/register_units/" className="link">
          <Button>
            Nova Unidade
          </Button>
        </Link>
      </S.Content>
    </S.Container>
  );
};

export default ListUnits;
