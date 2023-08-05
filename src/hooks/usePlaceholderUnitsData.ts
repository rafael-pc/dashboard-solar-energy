interface IUnit {
  id: number;
  apelido: string;
  local: string;
  marca: string;
  modelo: number;
  status: string;
}

export const usePlaceholderUnitsData = () => {
  const data: IUnit[] = JSON.parse(localStorage.getItem("unitsData") || "[]");
  const ids: number[] = data.map((item: IUnit) => item.id);
  const hasId: boolean = ids.some((id) => id < 5);

  if (!hasId) {
    const addPlaceholderData = () => {
      const items: IUnit[] = [
        {
          id: 1,
          apelido: "Painel 1",
          local: "Rua 5",
          marca: "Canadian",
          modelo: 155,
          status: "ativo",
        },
        {
          id: 2,
          apelido: "Painel 2",
          local: "Rua 15",
          marca: "Risen",
          modelo: 100,
          status: "inativo",
        },
        {
          id: 3,
          apelido: "Painel 3",
          local: "Rio de Janeiro",
          marca: "Hanwha",
          modelo: 200,
          status: "inativo",
        },
        {
          id: 4,
          apelido: "Painel 4",
          local: "São Paulo",
          marca: "Hanwha",
          modelo: 100,
          status: "ativo",
        },
        {
          id: 5,
          apelido: "Painel 5",
          local: "Rio de Janeiro",
          marca: "Canadian",
          modelo: 300,
          status: "ativo",
        },
      ];

      localStorage.setItem("unitsData", JSON.stringify(items));
    };

    if (document.readyState === "complete") {
      addPlaceholderData();
    } else {
      document.addEventListener("DOMContentLoaded", addPlaceholderData);
    }
  }
}
