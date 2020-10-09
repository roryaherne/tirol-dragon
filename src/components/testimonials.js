import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.less';
import 'swiper/components/pagination/pagination.less';

import "../styles/components/testimonials.less"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

SwiperCore.use([Pagination, Autoplay]);

const MySlider = () => {

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

    const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 5000,
        },
    }


    return (
        <section id="testimonials">
            <div className="row content">
                <span><i className="quote-left fa"><FontAwesomeIcon icon={faQuoteLeft} /></i></span>
                <div className="text-container">
                    <div className="section-head">
                        <h2>Testimonials</h2>
                    </div>
                    <div className="twelve columns flex-container">
                        <Swiper {...swiperParams}>
                            {data.allFile.edges.map(({ node: { childMarkdownRemark: { frontmatter } } }, index) => (
                                <SwiperSlide>
                                    <div>
                                        <blockquote>
                                            <p>{frontmatter.text}</p>
                                            <cite>{frontmatter.title}</cite>
                                        </blockquote>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
                <span><i className="quote-right fa"><FontAwesomeIcon icon={faQuoteRight} /></i></span>
            </div>
        </section>
    )
}

export default MySlider
