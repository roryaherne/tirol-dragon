import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'


const MySlider = () =>{

  const data = useStaticQuery(
    graphql`
    query TestimonialsQuery {
      allFile(filter: {relativePath: {glob: "testimonials/*"}}) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                text
                title
              }
            }
          }
        }
      }
    }
    `)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 7000,
    draggable: false,
    appendDots: dots => (
      <ol> {dots} </ol>
    ),
    customPaging: i => (
      <button>
        {i + 1}
      </button>
    ),
  }

  return (
    <section id="testimonials">
      <div className="row content">
        <span><i className="quote-left fa"><FontAwesomeIcon icon={ faQuoteLeft } /></i></span>
        <div className="text-container">
          <div className="section-head">
            <h2>Testimonials</h2>
          </div>
          <div className="twelve columns flex-container">
          <Slider {...settings} style={{ userSelect: 'text' }}>
            {data.allFile.edges.map(({ node: {childMarkdownRemark: {frontmatter}} }, index) => (
              <div>
                <blockquote>
                  <p>{ frontmatter.text }</p>
                  <cite>{ frontmatter.title }</cite>
                </blockquote>
              </div>
            ))}
          </Slider>
          </div>

        </div>
        <span><i className="quote-right fa"><FontAwesomeIcon icon={ faQuoteRight } /></i></span>
      </div>
    </section>
  )
}

export default MySlider
