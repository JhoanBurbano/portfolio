import { Button, ProjectsStyled } from "../styles";
import { Link } from "react-router-dom";
import wApp from "../../assets/WeatherApp.svg";
import cans from "../../assets/Cans.svg";
import arch from "../../assets/ARCHITECTS.svg";
import nottes from "../../assets/Nottes.svg";
import moviesflix from "../../assets/Moviesflix.svg";
import ss from "../../assets/shopstore.svg";
import lg from "../../assets/LogGames.svg";
import casa22 from "../../assets/Casa22.svg";
import { useGlobal } from "../../hooks/useGlobal";
import { RubberText, ViewItem } from "../atoms";

const Proyectos = () => {
  const xd = () => {
    return (
      <>
        {Array(6)
          .fill("")
          .map((e, i) =>
                <ViewItem logo="Logo Aqui" color={`#${(i + 1) * 234}`} />
          )}
      </>
    );
  };

  const { lang } = useGlobal();
  return (
    <ProjectsStyled>
      <div className="top">
        <RubberText word={"My Portfolio"} />
      </div>
      <div className="txt">
        {lang === "en" ? (
          <p>
            A small gallery of recent projects chosen by me. I've done them all
            together with amazing people from companies around the globe. It's
            only the most recent projects
          </p>
        ) : (
          <p>
            Una pequeña galería de proyectos recientes elegidos por mí. Los he
            hecho todos junto con gente increíble. de empresas de todo el mundo.
            Es solo son los proyectos mas recientes.
          </p>
        )}
        {lang === "en" ? (
          <Button>
            See More <span />
          </Button>
        ) : (
          <Button>
            Ver Más <span />
          </Button>
        )}
      </div>
      <div className="projects">
		<div className="projectTable">
			{
				xd()
			}
		</div>
	  </div>
    </ProjectsStyled>
  );
};

export { Proyectos };
