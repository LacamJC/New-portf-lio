import { IoLogoJavascript } from 'react-icons/io'
import styles from '../assets/scss/scss_components/Hero.module.css'
import { FaBootstrap, FaCss3Alt, FaFigma, FaGitAlt, FaGithubSquare, FaHtml5, FaJava, FaLinkedin, FaLinux, FaNodeJs, FaPhp, FaSass } from "react-icons/fa"
import { SiExpress, SiMysql } from 'react-icons/si'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Hero = () => {

    const habilidades = [
        "HTML",
        "CSS3",
        "ReactJS",
        "UI/UX",
        "Bootstrap5",
        
    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
    
    return(
        <>
            {/* <nav className={`${styles.nav_social}`}>
                <a href="#" target="_blank" className={`${styles.link}`}>
                    <FaGithubSquare  className={`${styles.icon}`}/>
                </a>
                <a href="#" target="_blank" className={`${styles.link}`}>
                    <FaLinkedin className={`${styles.icon}`} />
                </a>
            </nav> */}
            <main className={`${styles.background}`}>
                <h1 className={`${styles.titulo}`}><span className={`${styles.t_1}`}>Frontend</span> <span className={`${styles.t_2}`}>
                    Developer 
                    <ul className={`${styles.habilidades_lista}`}>
                        {habilidades.map((habilidade)=>(<li className={`${styles.habilidades_lista__item}`}>{habilidade}</li>))}
                    </ul>
                    </span></h1>
                    <br></br>


                    <h1 className={`${styles.mobileTitle}`}>Frontend Developer</h1>
                    <ul className={`${styles.mobileList}`}>
                        {habilidades.map((habilidade)=>(<li className={`${styles.habilidades_lista__item}`}>{habilidade}</li>))}
                    </ul>

                
            </main>
            {/* <h2 className={`${styles.assinatura}`}><FaLinkedin className={`${styles.icon}`}/><FaGithubSquare className={`${styles.icon}`}/> | João Ramajo</h2> */}

            {/* <div className={`${styles.controller}`}>
                <div className={`${styles.content}`}>
                    <h2 className={`${styles.techList}`}>
                        <FaJava className={`${styles.icon}`} />
                        <IoLogoJavascript  className={`${styles.icon}`} />
                        <FaHtml5  className={`${styles.icon}`} />
                        <FaCss3Alt    className={`${styles.icon}`} />
                        <FaPhp  className={`${styles.icon}`} />
                        <FaSass  className={`${styles.icon}`} />
                        <FaGitAlt className={`${styles.icon}`} />
                        <SiMysql  className={`${styles.icon}`} />
                        <FaBootstrap  className={`${styles.icon}`} />
                        <FaNodeJs  className={`${styles.icon}`} />
                        <SiExpress  className={`${styles.icon}`} />
                        <FaLinux   className={`${styles.icon}`} />
                        <FaFigma className={`${styles.icon}`} />
                    </h2>
                </div>
            </div> */}
            

            <Carousel
                 swipeable={true}
                 draggable={true}
                //  showDots={true}
                 responsive={responsive}
                //  ssr={true} // means to render carousel on server-side.
                 infinite={true}
                //  autoPlay={true}
                //  autoPlaySpeed={2000}
                 keyBoardControl={true}
                //  customTransition="all .5"
                //  transitionDuration={500}
                 containerClass="carousel-container"
                //  removeArrowOnDeviceType={["mobile"]}
                 centerMode={true}
                //  deviceType={this.props.deviceType}
                 dotListClass="custom-dot-list-style"
                 itemClass="carousel-item-padding-40-px"
                 >
                        <FaJava className={`${styles.icon}`} />
                        <IoLogoJavascript  className={`${styles.icon}`} />
                        <FaHtml5  className={`${styles.icon}`} />
                        <FaCss3Alt    className={`${styles.icon}`} />
                        <FaPhp  className={`${styles.icon}`} />
                        <FaSass  className={`${styles.icon}`} />
                        <FaGitAlt className={`${styles.icon}`} />
                        <SiMysql  className={`${styles.icon}`} />
                        <FaBootstrap  className={`${styles.icon}`} />
                        <FaNodeJs  className={`${styles.icon}`} />
                        <SiExpress  className={`${styles.icon}`} />
                        <FaLinux   className={`${styles.icon}`} />
                        <FaFigma className={`${styles.icon}`} />
            </Carousel>
            <br></br>
        </>
    )
}

export default Hero