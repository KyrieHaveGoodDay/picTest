import { useState } from 'react'
import p1 from '/src/assets/p1.jpg'
import love from '/src/assets/love_icon.png'
import shop from '/src/assets/shop_icon.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let data = [
    {
      pd: '/src/assets/p1.jpg',
      title: 'ACER Swift 1 14吋美型筆電',
      price: 14990,
      discount: 10800,
      link:'https://24h.pchome.com.tw/prod/DHAEDU-A900GI5RD?goddess_beauty_8'
    },
    {
      pd: '/src/assets/p2.jpg',
      title: '未來實驗室 6S手足修磨儀',
      price: 999,
      discount: 699,
      link:'https://24h.pchome.com.tw/prod/DEAC9C-A900B5NTP?goddess_beauty_7'
    },
    {
      pd: '/src/assets/p3.jpg',
      title: 'LONGCHAMP 經典包',
      price: 11500,
      discount: 7800,
      link:'https://24h.pchome.com.tw/prod/DICKE6-A900H8I61?goddess_beauty_9'
    },
    {
      pd: '/src/assets/p4.jpg',
      title: 'Apple iPad Air 64G WiFi',
      price: 19900,
      discount: 18900,
      link:'https://24h.pchome.com.tw/store/DYAJF2?goddess_beauty_10'
    },
  ]

  return (
    <>
      <div className="project">
        {
          data.map((item, index) => {
            return <>
              <div key={index} className='pds'>
                <a href={item.link} target='_blank'>
                  <div className='pdImg'>
                    <img src={item.pd} alt="" />
                  </div>
                  <div className='pdData'>
                    <div className="title">{item.title}</div>
                    <div className="money">
                      <div className="price">NT${item.price}</div>
                      <div className="discount">
                        <span>NT${item.discount}</span>
                        <div>
                          <img src={love} alt="" />
                          <img src={shop} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </>
          })
        }

      </div>
    </>
  )
}

export default App
