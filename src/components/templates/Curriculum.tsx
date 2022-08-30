import { Component, ReactNode } from "react";
import { CardStyled, CurriculumStyled, ItemStyled } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { IData } from "../../interfaces";

export class Curriculum extends Component<{data: IData}> {

  Cards = function (index:number, enterprise: string, year: string, description: {__html: string}, title: string, invert: boolean = false) {
    return (
        <CardStyled key={index}>
            <h4>{invert ? title : enterprise}</h4>
            <p>{invert? enterprise : title} | {year}</p>
            <section dangerouslySetInnerHTML={description}></section>
        </CardStyled>
    )
}

  render(): ReactNode {
    const data = this.props.data;
    return (
      <CurriculumStyled>
        <div className="top">
          <figure className="img-profile">
            <img src={data.profile} alt="JSB" />
          </figure>
          <h3>Jhoan Sebastian Burbano</h3>
          <p>Sr Fullstack Developer</p>
          <a href={data.links.email} className="email">
            joans.burbano@gmail.com
          </a>
        </div>
        <div className="body">
          <div className="left">
            <div className="info">
              <h3>Personal Info</h3>
              {data.info.map((item: string, i:number) => {
                if(item.includes("319"))return <ItemStyled key={i} href={data.links.whatsapp} target="_blank" rel="noreferrer">{item}</ItemStyled>
                return <ItemStyled key={i}>{item}</ItemStyled>;
              })}
                    <div className="social">
          <a target='_blank' rel='noreferrer' href={data.links.linkedin}><FontAwesomeIcon icon={faLinkedin}/></a>
          <a target='_blank' rel='noreferrer' href={data.links.github}><FontAwesomeIcon icon={faGithub}/></a>
          <a target='_blank' rel='noreferrer' href={data.links.instagram}><FontAwesomeIcon icon={faInstagram}/></a>
        </div>
            </div>
            <div className="skills">
              <h3>Skills</h3>
              {data.skills.map((item: string, i:number) => {
                return <ItemStyled key={i}>{item}</ItemStyled>;
              })}
            </div>
            <div className="langs">
              <h3>Langs</h3>
              {data.langs.map((item: string, i:number) => {
                return <ItemStyled key={i}>{item}</ItemStyled>;
              })}
            </div>
            <div className="hobbies">
              <h3>Hobbies & Preferences</h3>
              {data.hobbies.map((item: string, i:number) => {
                return <ItemStyled key={i}>{item}</ItemStyled>;
              })}
            </div>
          </div>
          <div className="right">
            <div className="intro">
              <h3>About Me</h3>
              <section
                className="about"
                dangerouslySetInnerHTML={data.about}
              ></section>
            </div>
            <div className="experience">
              <h3>Work Experience</h3>
              {
                  data.experience.map((e: Record<string, any>, i:number) => this.Cards(i, e.enterprise, e.year, e.description, e.title))
              }
            </div>
            <div className="academic">
              <h3>Academic Formation</h3>
              {
                  data.academic.map((e: Record<string, any>, i:number) => this.Cards(i, e.enterprise, e.year, e.description, e.title, true))
              }
            </div>
          </div>
        </div>
      </CurriculumStyled>
    );
  }
}