import "../css/SectionLoc/SecLoc.css";
import LocIcon from "../css/images/ri-map-pin-line.svg";

export function SectionLoc() {
  return (
    <>
      <div className="box-loc">
        <div className="box-titleLocation">
          <div className="iconLoc">
            <img src={LocIcon} width={20} alt="" />
          </div>
          <div className="titleLocation">
            <span>Nossa Localização</span>
            <p>R. Itajaí Leal, 24 - Ampliação</p>
          </div>
        </div>
        <div className="box-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3371699461586!2d-42.8607519894425!3d-22.752865232301534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99c00f3b27c637%3A0x2a156e65e0c04ed7!2zUi4gSXRhamHDrSBMZWFsLCAyNCAtIEFtcGxpYcOnw6NvLCBJdGFib3Jhw60gLSBSSiwgMjQ4MDgtMzk2!5e0!3m2!1spt-BR!2sbr!4v1764268092081!5m2!1spt-BR!2sbr"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
