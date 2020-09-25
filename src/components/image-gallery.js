import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import content from '../../content/image-gallery.yaml'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const imageGallery = content.imageGallery

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <section id="image-gallery">

        <div className="row section-head">
          <h2>{ content.title }</h2>
          <p>{ content.body }</p>
     </div>
     <div className="row">
       <div className="twelve columns">
         <div id="image-gallery-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

           {imageGallery.map((image, index) => {
             return (
               <div className="columns item" key={index.toString()}>
                 <div className="item-wrap">

                   <a
                     href={'images/image-gallery/big/' + image.big}
                     data-imagelightbox="a" onClick={event => {
                        event.preventDefault()
                        this.setState({ isOpen: true, photoIndex: index, })
                  }}>
                     <img
                       src={'images/image-gallery/' + image.thumb}
                       alt={image.caption} />
                       <div className="overlay"></div>
                         <div className="link-icon">
                           <FontAwesomeIcon icon={faPlus} />
                         </div>
                         </a>
                     </div>
                   </div>
             )
           })}

             </div>
           </div>
         </div>
      <div>

      {isOpen && (
        <Lightbox
          mainSrc={
            'images/image-gallery/big/' +imageGallery[photoIndex].big
          }
          nextSrc={
            'images/image-gallery/big/' +imageGallery[(photoIndex + 1) %imageGallery.length].big
          }
          prevSrc={
            'images/image-gallery/big/' +imageGallery[(photoIndex +imageGallery.length - 1) %imageGallery.length].big}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex +imageGallery.length - 1) %imageGallery.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) %imageGallery.length,
            })
          }
          imageCaption={imageGallery[photoIndex].caption}
          enableZoom={false}
        />
      )}
      </div></section>
    );
  }
}
