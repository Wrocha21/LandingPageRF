import { CardBeneficios } from "./cardBeneficios";

export interface cardProps {
  price?: string
  plan?: string
  variantadvantages?: "Advantage85" | "Advantage100" | "Advantage300";
}

export function Card(props: cardProps) {
  return (
    <>
      <div className="card">
        <div className="titles-card">
          <div className="titles">
            <h3>Plano {props.plan}</h3>
            <h1>
              {props.price}
              <small>/mês</small>
            </h1>
            <h4>Por pessoa</h4>
          </div>
          <CardBeneficios variantCard={props.variantadvantages} />
            <div className="buttonPrice">
              <a href="#home">Saiba mais no Whatsapp</a>
            </div>
        </div>
      </div>
    </>
  );
}
