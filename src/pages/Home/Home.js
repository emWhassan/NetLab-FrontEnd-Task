import React, { useEffect, useState } from 'react'
import { pdfsData, tileData, videosData } from '../../api/data'
import cover from "../../assets/images/cover.png"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Pdf from '../../components/Pdf/Pdf'
import Tile from '../../components/Tile/Tile'
import YouTubePlayer from '../../components/YoutubePlayer/YoutubePlayer'
import "../../styles/home.css"
import { loadImage } from '../../utils/common'

const Home = () => {
  const [imageDimensions, setImageDimensions] = useState({});

  useEffect(() => {
    loadImage(setImageDimensions, cover)
  }, [])
  
  return (
    <>
      <Header />
      <section className='home-cover'>
        {Object.keys(imageDimensions).length !== 0 &&
          <>
            <div className='left-image' style={{width: imageDimensions.width / 2}}>
              <div className='cover-bg-image' style={{backgroundImage: `url(${cover})`}}></div>
            </div>
            <div className='cover-center'>
              <h2>Fakta om arbeid og helse</h2>
              <h4>Nasjonal overvåking av arbeidsmiljø (NOA)</h4>
              <div className='cover-data'>
                <div className='cover-data-item'>
                  <h3>2,8 mil</h3>
                  <p>i arbeid i Norge</p>
                </div>
                <div className='cover-data-item'>
                  <h3>9 av 10</h3>
                  <p>trives i jobben</p>
                </div>
                <div className='cover-data-item'>
                  <h3>1 av 3</h3>
                  <p>har arbeidsrelatert sykdom</p>
                </div>
              </div>
            </div>
            <div className='right-image' style={{width: imageDimensions.width / 2}}>
              <div className='cover-bg-image' style={{backgroundImage: `url(${cover})`}}></div>
            </div>
          </>
        }
      </section>
      <section className='tiles container'>
        {tileData.map((tile, index) => 
          <Tile 
            key={index} 
            title={tile.title} 
            description={tile.description} 
            type={tile.type}
            onPress={tile.onPress}
          />
        )}
      </section>
      <section className='pdfs container'>
        {pdfsData.map((pdf, index) => 
          <Pdf 
            key={index}
            title={pdf.title}
            description={pdf.description}
            image={pdf.image}
            onPress={pdf.onPress}
          />
        )}
      </section>
      <section className='videos container'>
        {videosData.map((video, index) => 
          <YouTubePlayer 
            key={index}
            title={video.title}
            description={video.description}
            image={video.image}
            src={video.src}
          />
        )}
      </section>
      <Footer />
    </>
  )
}

export default Home