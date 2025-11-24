import "../css/SectionVideos/SecVideos.css";
import igrejaFerma from "../css/videos/IGreja da ferma.mp4";
import igrejaGoncalo from "../css/videos/goncalo.mp4";
import alunoTocando from "../css/videos/Aluno tocando.mp4";
import setaDireita from "../css/images/hi-arrow-small-right.svg";
import setaEsquerda from "../css/images/arrowLeft.svg";
import { useState } from "react";

export function SectionVideos() {
  const videosIgreja = [igrejaFerma, igrejaGoncalo, alunoTocando];
  const [videoId, setVideoId] = useState(0);
  if (videoId > videosIgreja.length - 1) {
    setVideoId(0);
  }
  if (videoId < 0) {
    setVideoId(videosIgreja.length - 1);
  }
  return (
    <>
      <div className="containerVideo">
        <div className="box-videos">
          <div className="video-box">
            <div className="title-video">
              <span>
                {videoId === 1 ? "Alunos da Igreja de São Gonçãlo" : ""}
              </span>
              <span>{videoId === 0 ? "Alunos da Igreja Ferma" : ""}</span>
              <p
                style={{
                  color: videoId === videosIgreja.length - 1 ? "white" : "",
                }}
              >
                Confira alguns momentos das aulas dos nossos alunos
              </p>
            </div>
            <video
              id="videoMobile"
              controls
              controlsList="nodownload"
              disablePictureInPicture
              style={{ width: videoId === 1 || videoId === 0 ? "350px" : "" }}
              src={videosIgreja[videoId]}
            ></video>
            <video
              id="videoPC"
              controls
              controlsList="nodownload"
              disablePictureInPicture
              style={{ width: videoId === 1 || videoId === 0 ? "480px" : "" }}
              src={videosIgreja[videoId]}
            ></video>
          </div>

          <div className="arrows">
            <img
              src={setaEsquerda}
              className="arrowLeft"
              onClick={() => setVideoId((prev) => prev - 1)}
              alt=""
            />
            <img
              src={setaDireita}
              onClick={() => setVideoId((prev) => prev + 1)}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
