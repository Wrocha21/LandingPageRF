import { Card } from "./reutilizaveis/card";
import '../css/cards/sectionPrices.css'

export function PricesSection() {
  return (
    <>
      <div className="containerPrices">

      <div className="box-prices" id="prices">
        <div className="box-cardBasic">
          <Card plan="Essencial" variantadvantages="Advantage85" price="$85"/>
          <Card plan="Pacote Louvor" variantadvantages="Advantage300" price="$300"/>
          <Card plan="Individual" variantadvantages="Advantage100" price="$100"/>
        </div>
      </div>
      </div>
    </>
  );
}
