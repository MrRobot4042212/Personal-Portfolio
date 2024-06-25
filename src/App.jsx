import React from 'react';
import { ContentRowLR } from './components/ContentRowLR.jsx';
import { UlBoxes } from './components/UlBoxes.jsx';
import { MediaIcon } from './components/MediaIcon.jsx';
import { LiItem } from './components/LiItem.jsx';

/* CONTENT FOR BIOGRAFIA */
const biografia = [
  {
    Tittle: 'Sobre mi',
    className:'mi-section-container-me',
    Content1: (
      <section className="sectionPin">
          <div className="pin-wrap-sticky">
            <div className="pin-wrap">
            
                  <section className='mi-me-section' datatype='biografia'>
                    <h1 className='mi-section-title'>Biografía</h1>
                    <div className='content-wrap'>
                      <ul className='mi-text-wrap-container'>
                          <li>
                          Gracias a mi sólida formación en la Universidad Europea, he desarrollado habilidades avanzadas en la manipulación de redes y servicios esenciales como DNS, DHCP y VPN. Además, considero un logro personal mi continuo aprendizaje en desarrollo front-end con frameworks y librerías JavaScript, así como en back-end con PHP, SQL y JSON.
                          </li>
                          <li>
                          He completado los estudios en "Sistemas Microinformáticos en Red" y "Administración de Sistemas Informáticos en Red", consolidando una base técnica sólida. Durante mi trayectoria profesional, he ganado experiencia significativa utilizando GitHub para colaborar en proyectos de desarrollo y gestión de código, aplicando metodologías ágiles y mejores prácticas en la administración de sistemas informáticos.

                          </li>
                          <li>
                          Estoy comprometido con el aprendizaje continuo y la aplicación de mis conocimientos para contribuir al éxito de proyectos tecnológicos innovadores y desafiantes.
                          </li>
                      </ul>
                      <span>
                        <img className='mi-img-row' src="../data/img/avatar-bio.jpg" alt="" />
                      </span>
                    </div>
                  </section>
                  <section className='mi-me-section' datatype='experiencia'>
                    <h1 className='mi-section-title'>Experiencia laboral</h1>
                    <div className='content-wrap'>
                      <ul className='mi-text-wrap-container'>
                          <li datatype='indra'>
                          <img className='text-wrap-icon' src="./data/img/iconos/indra_logo.jpeg" alt="" />
                          <h2>INDRA Sistemas | Sistemas ATM</h2>
                          <h4>20/03/2023 – 11/06/2024</h4>
                          <p>
                          •	Instalación de sistemas ATM
                          •	Instalación de sistemas propietarios
                          •	Scripting
                          •	Manipulación de base de datos Mysql y postgreSQL
                          </p>

                          </li>
                          <li datatype='infibail'>
                          <img className='text-wrap-icon' src="./data/img/iconos/infibail.png" alt="" />
                          <h2>Infibail Ibérica | Técnico Informático</h2>
                          <h4>18/09/2021 – 21/06/2022</h4>
                          <p>
                          •	SysAdmin. 
                          •	Mantenimiento y reparación de equipos. 
                          •	Preparación de pedidos. 
                          •	Tareas ofimáticas. 
                          </p>
                          </li>

                      </ul>

                    </div>
                  </section>
                  <section className='mi-me-section' datatype='educacion'>
                    <h1 className='mi-section-title'>Educación</h1>
                    <div className='content-wrap'>
                      <ul className='mi-text-wrap-container'>
                          <li>
                          <img className='text-wrap-icon' src="./data/img/iconos/UEM.png" alt="" />
                          <h2>Grado de formación profesional superior 
                          Administración de Sistemas Informáticos en Red 
                          </h2>
                          <h4>18/09/2023 – 21/06/2024<br/>Universidad Europea, Madrid (Alcobendas).</h4>
                          </li>
                          <li>
                          <img className='text-wrap-icon' src="./data/img/iconos/Santamaria.png" alt="" />
                          <h2>Grado de formación profesional medio 
                          Sistemas Microinformáticos y redes 
                          </h2>
                          <h4>18/09/2023 – 21/06/2024<br/>I.E.S Santa María de los Apóstoles.</h4>
                          </li>
                      </ul>
                    </div>
                  </section>
                  <section className='mi-me-section' datatype='cursos'>
                    <h1 className='mi-section-title'>Cursos</h1>
                    <div className='content-wrap'>
                      <ul className='mi-text-wrap-container'>
                      <li>
                          <img className='text-wrap-icon' src="./data/img/iconos/Harvard_University_coat_of_arms.svg.png" alt="" />
                          <h2>CS50's Introduction to computer science
                          </h2>
                          <h4>19/05/2024 – Actualmente<br/>Harvard University.</h4>
                      </li>
                      <li>
                          <img className='text-wrap-icon' src="./data/img/iconos/640px-Cisco_logo_blue_2016.svg.png" alt="" />
                          <h2>CS50's Introduction to computer science
                          </h2>
                          <h4>19/05/2024 – Actualmente<br/>Harvard University.</h4>
                      </li>

                      </ul>
                    </div>
                  </section>


            </div>
        </div>
    </section>
    ),
    }
];
/* CONTENT FOR PROYECTOS */
const proyectos = [
  {
    Tittle: 'Proyectos',
    Content1:
     (
      <ul className='proyect-container mi-flexZoom'>
        <p className='waterMark'>Mueva el ratón sobre un proyecto para ver el contenido</p>
        <li className="li-container">
          <section className='flexZoom-container'>
              <UlBoxes
                LiImg="../data/img/proyectos/EHN.png"
                LiTittle="El Hamiti News"
                frontFirstTittle="¿Qué es El Hamiti News?"
                frontfirstP="Trabajo fin de curso de ASIR 2024 (Grupo 5) - Universidad Europea de Madrid (Alcobendas)"
                frontSecondTittle="Descripción"
                frontSecondP="El Hamiti News tiene como objetivo el diseño, desarrollo e implementación de una plataforma de noticias especializadas en el ámbito de la informática y la tecnología. Esta plataforma tiene como misión proporcionar información precisa, oportuna y relevante sobre los últimos desarrollos en la industria tecnológica, incluyendo innovaciones en hardware y software, tendencias en inteligencia artificial, ciberseguridad, entre otros."
                icons={[
                  {
                    url: "https://github.com/MrRobot4042212/El-Hamiti-News.github.io",
                    socialName: "Repositorio Github",
                    iconSrc:<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-GithubFill"><g clip-path="url(#clip0_100_4)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></g><defs><clipPath id="clip0_100_4"><rect width="24" height="24"/></clipPath></defs></svg> ,
                    Download: ""
                  },
                  {
                    url: "../data/utils/Grupo05_Memoria_ElHamitiNews.pdf",
                    socialName: "Memoria",
                    iconSrc: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Download"><path d="M12 15V3m0 12l-4-4m4 4l4-4"/><path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21H19.439a2 2 0 0 0 1.94-1.515L22 17"/></svg>,
                    Download: "UEM_ALCOBENDAS_ASIR_Grupo05_Memoria.pdf"
                  }
                ]}
              />
              <UlBoxes
                LiImg="../data/img/proyectos/maraboo.png"
                LiTittle="La Mirada de Maraboo"
                frontFirstTittle="¿Qué es La Mirada de Maraboo?"
                frontfirstP='Proyecto de sitio web para la asociación sin ánimo de lucro "La Mirada de Maraboo" (En desarrollo)'
                frontSecondTittle="Descripción"
                frontSecondP='La Asociación "La Mirada de Maraboo" se compromete a mejorar la vida de 100 niños  en situación de orfandad en Tanzania, específicamente en el el orfanato "Msamaria" en el pueblo de Moshi. Nuestra misión es brindarles un hogar seguro, acceso a educación de calidad, atención médica y apoyo emocional, para que puedan crecer y desarrollarse en un entorno propicio.'
                icons={[
                  {
                    url: "https://github.com/MrRobot4042212/La_mirada_de_maraboo.github.io",
                    socialName: "Repositorio Github",
                    iconSrc:<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-GithubFill"><g clip-path="url(#clip0_100_4)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></g><defs><clipPath id="clip0_100_4"><rect width="24" height="24"/></clipPath></defs></svg> ,
                    Download: ""
                  },
                  {
                    url: "https://mrrobot4042212.github.io/La_mirada_de_maraboo.github.io/",
                    socialName: "Sitio Web",
                    iconSrc:<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Globe"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/><path d="M2 12h20"/></svg>,
                    Download: ""
                  },

                ]}
              />
              <UlBoxes
                LiImg="../data/img/proyectos/logo.png"
                LiTittle="PowerPulse"
                frontFirstTittle="¿Qué es PowerPulse?"
                frontfirstP='Proyecto de sitio web / aplicación movil que tiene diferentes herramientas para ayudarte en tu viaje fitness (En desarrollo)'
                frontSecondTittle="Descripción"
                frontSecondP='"PowerPulse" es una plataforma fitness que ofrece herramientas como una calculadora de calorías diarias y un planificador de comidas personalizado. También incluye rutinas de entrenamiento variadas y seguimiento de progreso, todo diseñado para ayudarte a alcanzar tus objetivos de forma efectiva. La plataforma cuenta con una variedad de herramientas que abarcan diferentes aspectos de tu viaje fitness.'
                icons={[
                  {
                    url: "https://github.com/MrRobot4042212/PowerPulse.github.io",
                    socialName: "Repositorio Github",
                    iconSrc:<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-GithubFill"><g clip-path="url(#clip0_100_4)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></g><defs><clipPath id="clip0_100_4"><rect width="24" height="24"/></clipPath></defs></svg> ,
                    Download: ""
                  },
                  {
                    url: "https://mrrobot4042212.github.io/PowerPulse.github.io/",
                    socialName: "Sitio Web",
                    iconSrc:<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Globe"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/><path d="M2 12h20"/></svg>,
                    Download: ""
                  },
                ]}
              />
              <UlBoxes
                LiImg="../data/img/proyectos/FNC.png"
                LiTittle="FilmsNCritics"
                frontFirstTittle="¿Qué es FilmsNCritics ?"
                frontfirstP='Trabajo de realización de un sitio web para la asignatura implantacion web de 1ºASIR'
                frontSecondTittle="Descripción"
                frontSecondP='FilmsNcritics es una plataforma en línea dedicada a recopilar y presentar opiniones de usuarios sobre películas de diversas épocas, géneros y culturas cinematográficas. La página web se ha establecido como un espacio interactivo donde los amantes del cine pueden expresar sus pensamientos y evaluaciones sobre las últimas producciones cinematográficas, clásicos atemporales y películas independientes. FilmsNcritics también proporciona información detallada sobre las películas y una interfaz intuitiva y amigable.'
                icons={[
                  {
                    url: "https://github.com/MrRobot4042212/PowerPulse.github.io",
                    socialName: "Repositorio Github",
                    iconSrc:<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-GithubFill"><g clip-path="url(#clip0_100_4)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></g><defs><clipPath id="clip0_100_4"><rect width="24" height="24"/></clipPath></defs></svg> ,
                    Download: ""
                  },
                  {
                    url: "https://mrrobot4042212.github.io/FNC.github.io/",
                    socialName: "Sitio Web",
                    iconSrc:<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Globe"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/><path d="M2 12h20"/></svg>,
                    Download: ""
                  },
                ]}
            />
          </section>
        </li>
      </ul>
    ),
    className:'mi-section-container'
  }
];
/* CONTENT FOR APTITUDES*/ 
const aptitudes =[
    {
        Tittle: 'Aptitudes',
        Content1:
        (
            <ul className='mi-flexZoom'>
            <p className='waterMark'>Mueva el ratón sobre una aptitud para ver el contenido</p>
            <li className="li-container">
              <section className='flexZoom-container'>
                  <UlBoxes
                  LiImg=""
                  LiTittle="Front-End"
                  liItemNames={[
                    { liItemName: "HTML5" },
                    { liItemName: "CSS" },
                    { liItemName: "Vanilla javaScript" },
                    { liItemName: "React.js" },
                    { liItemName: "JQuery" },
                    { liItemName: "Sass" },
                    { liItemName: "Shopify" },
                    { liItemName: "WordPress" },
                    { liItemName: "Git" },
                    { liItemName: "Github" },
                  ]}
                />

  
                <UlBoxes
                    LiImg=""
                    LiTittle="Back-End"
                    liItemNames={[
                      { liItemName: "Mysql" },
                      { liItemName: "MariaDB" },
                      { liItemName: "PostgreSQL" },
                      { liItemName: "InnoDB" },
                      { liItemName: "PHP" },
                      { liItemName: "C#" },
                    ]}
                />
                <UlBoxes
                    LiImg=""
                    LiTittle="Microservicios y SO"
                    liItemNames={[
                      { liItemName: "DHCP" },
                      { liItemName: "Bind9" },
                      { liItemName: "OpenVPN y Wireguard" },
                      { liItemName: "Encriptación" },
                      { liItemName: "CA y certificados" },
                      { liItemName: "Apache2" },
                      { liItemName: "Nginx" },
                      { liItemName: "BBDD"},
                      { liItemName: "Linux" },
                      { liItemName: "Windows" },
                      { liItemName: "Ubuntu" },
                      { liItemName: "Debian" },
                      { liItemName: "CentOS" },

                    ]}
                  
                />
                <UlBoxes
                    LiImg=""
                    LiTittle="Otros"
                    liItemNames={[
                      { liItemName: "Docker" },
                      { liItemName: "Kubernetes" },
                      { liItemName: "NPM" },
                      { liItemName: "Vite"},
                      { liItemName: "VMware Workstation"},
                      { liItemName: "Oracle VM VirtualBox"},

                    ]}

                
                />

              </section>
            </li>
          </ul>
        ),
        className:'mi-section-container'

    }
];
export function App() {
  return (
    <main>
      {biografia.map((bio, index) => {
        const { Tittle, Content1,className } = bio;
        return (
          <ContentRowLR
            key={index}
            Tittle={Tittle}
            Content1={Content1}
            className={className}

          />
        );
      })}
      {proyectos.map((proyecto, index) => {
        const { Tittle, Content1,className } = proyecto;
        return (
          <ContentRowLR
            key={index}
            Tittle={Tittle}
            Content1={Content1}
            className={className}
          />
        );
      })}
      {
        aptitudes.map((aptitud, index) => {
          const { Tittle, Content1, className } = aptitud;
          return (
            <ContentRowLR
              key={index}
              Tittle={Tittle}
              Content1={Content1}
              className={className}

            />
          );
        })
      }


    </main>
  );
}
