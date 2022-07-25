import '../assets/css/flex.css'

import '../assets/css/Cover.css'
import '../assets/css/Page1.css'
import '../assets/css/Page2.css'
import '../assets/css/Page3.css'
import '../assets/css/Page4.css'
import '../assets/css/Page5.css'
import '../assets/css/Page6.css'
import '../assets/css/Page7.css'
import '../assets/css/Page8.css'
import '../assets/css/Page9.css'
import '../assets/css/Page10.css'
import '../assets/css/Page11.css'
import '../assets/css/Page12.css'
import '../assets/css/Page13.css'
import '../assets/css/Page14-15.css'
import '../assets/css/Page16.css'
import '../assets/css/Page17.css'
import '../assets/css/Page18.css'

import {LargePapers, SmallPapers} from './Paper'
import PageContent  from './PageContent'
import Heartbeat from './Heartbeat'
import React, {useState, useRef} from 'react'

function debounce(func, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        func.apply(this, arguments)
      }, ms)
    }
  }
  
const Album = () => {
    /*rerender when resize browser*/
    const [dimesion, setDimension] = useState({
      height: window.innerHeight,
      width: window.innerWidth
    })
  
    React.useEffect(() => {
      const handleResize = debounce(() => {
        setDimension({
          height: window.innerHeight,
          width: window.innerWidth
        })
      }, 1000)
  
      window.addEventListener('resize', handleResize)
      return _ => {
        window.removeEventListener('resize', handleResize)
      }  
    })
    /* */
    const [currentLocation, setCurrentLocation] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showHeart, setOpenHeart] = useState(false)

    let maxLocation = PageContent.length
  
    PageContent.forEach((page, index) => {
      page['zIndex'] = maxLocation - 1 - index
    })

    const ref = useRef([]);
    const btn = useRef();
  
    const addToRefs = (el) => {
      if (el && !ref.current.includes(el)) {
        ref.current.push(el)
      }
    }
  
    const handlePrevBtn = () => {
      if (currentLocation + 1 === maxLocation) setOpenHeart(false)
      if (window.innerWidth > 500 && ref.current.length !== 0 && currentLocation > 0) {
        ref.current[currentLocation - 1].classList.remove('flipped')
        ref.current[currentLocation - 1].style.zIndex = maxLocation - currentLocation
        setCurrentLocation(currentLocation - 1)
      } else if (window.innerWidth <= 500 && currentIndex > 0) setCurrentIndex(currentIndex - 1)
      
    }
  
    const handleNextBtn =  () => {
      if (window.innerWidth > 500 && ref.current.length !== 0 && currentLocation < maxLocation - 1) {
        setCurrentLocation(currentLocation + 1)
        ref.current[currentLocation].classList.add('flipped')
        ref.current[currentLocation].style.zIndex = currentLocation + 1
      } else if (window.innerWidth <= 500 && currentIndex !== maxLocation * 2 - 3) {
        setCurrentIndex(currentIndex + 1)
      }
      
      if (currentLocation + 2 === maxLocation) setOpenHeart(true)
    }
  
    if (window.innerWidth > 500) 
      return (
        <div id = 'bg-lg'>
          <button id = 'prev-btn' onClick ={handlePrevBtn} style = {(currentLocation !== 0 && currentLocation !== maxLocation) ?  { transform: `translateX(${-0.5 * ref.current[0].clientWidth + btn.current.clientWidth + 7}px)` } : {display: 'none'} }> 
            <i className ="fa fa-arrow-circle-left"></i>
          </button>
          <div id = 'book' style = {(currentLocation !== 0 && currentLocation !== maxLocation) ?  { transform: 'translateX(50%)' } : {transform: 'translateX(0)'} }>
              {PageContent.slice(0, maxLocation - 1).map((page) => (
                <LargePapers key = {page.id} ref = {addToRefs} page = {page}></LargePapers>
              ))}
              {showHeart && <Heartbeat></Heartbeat>}
          </div>
          <button id = 'next-btn' ref = {btn} onClick ={handleNextBtn} style = {(currentLocation !== 0 && currentLocation !== maxLocation) ?  { transform: `translateX(${0.5 * ref.current[0].clientWidth - btn.current.clientWidth - 7}px)` } : {transform: 'translateX(0)'} }> 
              <i className ="fa fa-arrow-circle-right"></i>
          </button>
        </div>
      ); 
      else return (
        <div id = 'bg-sm'>
          <button id = 'prev-btn' onClick ={handlePrevBtn}> 
            <i className ="fa fa-arrow-circle-left" style = {{fontSize: "20px"}}></i>
          </button>
            <div id = 'book'>
              {Array.from(Array(maxLocation * 2 - 2), (_, i) => i).map((index) => {
                return (
                <div key = {index} className = {index === currentIndex ? 'active' : 'unactive'} >
                  {index === currentIndex && currentIndex % 2 === 0 && <SmallPapers isFront = {true} page = {PageContent[index / 2]}></SmallPapers>}
                  {index === currentIndex && currentIndex % 2 !== 0 && <SmallPapers isFront = {false}  page = {PageContent[Math.floor(index / 2)]} ></SmallPapers>}
                </div>
              )}
                )}
            </div>
          <button id = 'next-btn' onClick ={handleNextBtn}> 
            <i className ="fa fa-arrow-circle-right" style = {{fontSize: "20px"}}></i>
          </button>
        </div>
      ) 
  }
  
  export default Album
  