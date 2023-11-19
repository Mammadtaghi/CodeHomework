import React from 'react'
import "./main.css"


function Main() {

  // Default active first slide


  function showSlide(e) {
    console.log(e.classList[3].slice(-1));
    console.log(e.parentElement.previousElementSibling);

    // Show the clickedDot'th Slide Success
    e.parentElement.previousElementSibling.style.transform = `translateX(-${+e.classList[3].slice(-1) * 25 - 25}%)`

    // reset all dots' color
    for (const item of e.parentElement.children) {
      item.classList.remove('active')
    }

    // Add active class to clicked dot
    e.classList.add('active')
  }

  return (
    <main>
      <section id='slider'>

        <div className="slider">

          <div className="slidesBox">

            <div className="slide slide1">
              <div className="topRightText">
                <h2 className='topRightTitle'>FILM FESTIVAL 2022 <br /> STARTS APRIL</h2>
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-border-img.png" alt="Dots" /> <br />
                <span className='festivalDate'>Rome / 3 Locations / Seven days</span>
              </div>

              <div className="bottomLeftText">
                <span className="presents">NOIDEA PRODUCTION PRESENTS</span>
                <h1 className='FilmTitle'>TO THE NOWHERE</h1>
                <span className="director">Written and directed by Albinoni Nosurname / Somewhere in the Far Future</span>
                <div className="awards">
                  <img src="http://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon1.png" alt="" />
                  <img src="http://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png" alt="" />
                  <img src="http://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon3.png" alt="" />
                </div>
              </div>

              <div className="bottomRightBox">
                <span className="playFilm">Play
                  <svg xmlns="http://www.w3.org/2000/svg" class="svg-triangle">
                    <polygon points="0,0 0,16 12,8" />
                  </svg>
                </span>
                <button className="getTickets">Get Tickets</button>
              </div>

            </div>

            <div className="slide slide2">
              <div className="topRightText">
                <h2 className='topRightTitle'>FILM FESTIVAL 2022 <br /> STARTS APRIL</h2>
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-border-img.png" alt="Dots" /> <br />
                <span className='festivalDate'>Rome / 3 Locations / Seven days</span>
              </div>

              <div className="bottomLeftText">
                <span className="presents">FILMIX PRODUCTION PRESENTS</span>
                <h1 className='FilmTitle'>INTO THE COSMOS</h1>
                <span className="director">Written and directed by Lars Johnson / Sweden 2011</span>
                <div className="awards">
                  <img src="http://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon1.png" alt="" />
                  <img src="http://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png" alt="" />
                  <img src="http://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon3.png" alt="" />
                </div>
              </div>

              <div className="bottomRightBox">
                <span className="playFilm">Play
                  <svg xmlns="http://www.w3.org/2000/svg" class="svg-triangle">
                    <polygon points="0,0 0,16 12,8" />
                  </svg>
                </span>
                <button className="getTickets">Get Tickets</button>
              </div>

            </div>

            <div className="slide slide3">
              <div className="topRightText">
                <h2 className='topRightTitle'>FILM FESTIVAL 2022 <br /> STARTS APRIL</h2>
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-border-img.png" alt="Dots" /> <br />
                <span className='festivalDate'>Rome / 3 Locations / Seven days</span>
              </div>

              <div className="bottomLeftText">
                <span className="presents">TWEAK PRODUCTION PRESENTS</span>
                <h1 className='FilmTitle'>WAIT BY THE TRAIN</h1>
                <span className="director">Written and directed by Michel Gordon / France 1984</span>
                <div className="awards">
                  <img src="http://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon1.png" alt="" />
                  <img src="http://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png" alt="" />
                  <img src="http://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon3.png" alt="" />
                </div>
              </div>

              <div className="bottomRightBox">
                <span className="playFilm">Play
                  <svg xmlns="http://www.w3.org/2000/svg" class="svg-triangle">
                    <polygon points="0,0 0,16 12,8" />
                  </svg>
                </span>
                <button className="getTickets">Get Tickets</button>
              </div>

            </div>

            <div className="slide slide4">
              <div className="topRightText">
                <h2 className='topRightTitle'>FILM FESTIVAL 2022 <br /> STARTS APRIL</h2>
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-border-img.png" alt="Dots" /> <br />
                <span className='festivalDate'>Rome / 3 Locations / Seven days</span>
              </div>

              <div className="bottomLeftText">
                <span className="presents">FILMO PRODUCTION PRESENTS</span>
                <h1 className='FilmTitle'>HISTORY OF COLOUR</h1>
                <span className="director">Written by Julia Wang, directed by Andy Smith, 2000</span>
                <div className="awards">
                  <img src="http://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon1.png" alt="" />
                  <img src="http://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png" alt="" />
                  <img src="http://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon3.png" alt="" />
                </div>
              </div>

              <div className="bottomRightBox">
                <span className="playFilm">Play
                  <svg xmlns="http://www.w3.org/2000/svg" class="svg-triangle">
                    <polygon points="0,0 0,16 12,8" />
                  </svg>
                </span>
                <button className="getTickets">Get Tickets</button>
              </div>

            </div>


          </div>

          <div className="slidePagination">

            <i onClick={(e) => showSlide(e.target)} className="fa-solid fa-circle pag pag1"></i>
            <i onClick={(e) => showSlide(e.target)} className="fa-solid fa-circle pag pag2"></i>
            <i onClick={(e) => showSlide(e.target)} className="fa-solid fa-circle pag pag3"></i>
            <i onClick={(e) => showSlide(e.target)} className="fa-solid fa-circle pag pag4"></i>

          </div>

        </div>

      </section>

      <section id='norway'>

        <div className="norwayContainer">
          <div className='norwayCard flora'>
            <div className="norwayTitleBox">
              <h3 className='norwayTitle'>FLORA</h3>
              <p className='norwayInfo'><span className='hodor'>Hodor Ulman</span> / <span className="norwayText">Norway</span></p>
            </div>

          </div>

          <div className='norwayCard fifthDay'>
            <div className="norwayTitleBox">
              <h3 className='norwayTitle'>THE FIFTH DAY</h3>
              <p className='norwayInfo'><span className='hodor'>Hodor Ulman</span> / <span className="norwayText">Norway</span></p>
            </div>

            <div className="playButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62">
                <polygon className='triangle' points="38.28 31 27.028 24.504 27.028 37.496 38.28 31"></polygon>
                <polygon className="fillPolygon" points="38.28 31 27.028 24.504 27.028 37.496 38.28 31"></polygon>
                <circle cx="31" cy="31" r="30"></circle>
              </svg>
            </div>

          </div>

          <div className='norwayCard violinTeacher'>
            <div className="norwayTitleBox">
              <h3 className='norwayTitle'>THE VIOLIN TEACHER</h3>
              <p className='norwayInfo'><span className='hodor'>Hodor Ulman</span> / <span className="norwayText">Norway</span></p>
            </div>

            <div className="playButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62">
                <polygon className='triangle' points="38.28 31 27.028 24.504 27.028 37.496 38.28 31"></polygon>
                <polygon className="fillPolygon" points="38.28 31 27.028 24.504 27.028 37.496 38.28 31"></polygon>
                <circle cx="31" cy="31" r="30"></circle>
              </svg>
            </div>

          </div>

          <div className='norwayCard strangeLives'>
            <div className="norwayTitleBox">
              <h3 className='norwayTitle'>THE STRANGE LIVES</h3>
              <p className='norwayInfo'><span className='hodor'>Hodor Ulman</span> / <span className="norwayText">Norway</span></p>
            </div>

            <div className="playButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62">
                <polygon className='triangle' points="38.28 31 27.028 24.504 27.028 37.496 38.28 31"></polygon>
                <polygon className="fillPolygon" points="38.28 31 27.028 24.504 27.028 37.496 38.28 31"></polygon>
                <circle cx="31" cy="31" r="30"></circle>
              </svg>
            </div>

          </div>

          <div className='norwayCard blueBerries'>
            <div className="norwayTitleBox">
              <h3 className='norwayTitle'>BLUEBERRIES</h3>
              <p className='norwayInfo'><span className='hodor'>Hodor Ulman</span> / <span className="norwayText">Norway</span></p>
            </div>

          </div>

          <div className='norwayCard songOf'>
            <div className="norwayTitleBox">
              <h3 className='norwayTitle'>SONG OF MY PEOPLE</h3>
              <p className='norwayInfo'><span className='hodor'>Hodor Ulman</span> / <span className="norwayText">Norway</span></p>
            </div>

          </div>
        </div>

      </section>

      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  )
}

export default Main


// Link1 https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img2.jpg
// Link4 https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/h4-rev-img4a.jpg
