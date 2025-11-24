import checkCircle from '../../css/images/ri-checkbox-circle-line.svg'



export function CardBeneficios({...props}) {
  const advantages85: string[] = [
    "Aula para 2 pessoas",
    "1 Hora de aula compartilhada",
    "4 Aulas por mês",
    "Suporte via Zap",
  ];
  const advantages300: string[] = [
    "Aula para o Ministério da Igreja",
    "Violão, Guitarra, Teclado, Baixo e Bateria",
    "1 Hora de aula compartilhada",
    "4 Aulas por mês",
    "Suporte via Zap",
  ];
  const advantages100: string[] = [
    "Aula individual",
    "1 Hora de aula particular",
    "4 Aulas por mês",
    "Suporte via Zap",
  ];
  return (
    <>
      <div {...props} className="beneficios">
        {props.variantCard === "Advantage85" && (
          <div className="Advantage">
            <ul>
              {advantages85.map((item) => {
                return <li key={`${item}`}>
                  <div className="iconCheck">
                    <img src={checkCircle} width={14} alt="" />
                    {item}
                  </div>
                  </li>
              })}
            </ul>
          </div>
        )}
        {props.variantCard === "Advantage300" && (
          <div className="Advantage">
            <ul>
              {advantages300.map((item) => {
                return <li key={`${item}`}>
                  <div className="iconCheck">
                    <img src={checkCircle} width={14} alt="" />
                    {item}
                  </div>
                  </li>
              })}
            </ul>
          </div>
        )}
        {props.variantCard === "Advantage100" && (
          <div className="Advantage">
            <ul>
              {advantages100.map((item) => {
                return <li key={`${item}`}>
                  <div className="iconCheck">
                    <img src={checkCircle} width={14} alt="" />
                    {item}
                  </div>
                  </li>
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
