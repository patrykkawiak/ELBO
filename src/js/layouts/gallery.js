const prev = document.querySelector('.button.prev')
const next = document.querySelector('.button.next')
const galleryImgBoxes = document.querySelectorAll('.slider-img-box')

const getActiveImg = () => document.querySelector('.slider-img-box.active')
const getPrevImg = () => document.querySelector('.slider-img-box.prev')
const getNextImg = () => document.querySelector('.slider-img-box.next')
const getNexterImg = () => document.querySelector('.slider-img-box.nexter')
const getPreviouserImg = () => document.querySelector('.slider-img-box.previouser')
let index = 3
const maxIndex = galleryImgBoxes.length - 1
let isTransitioning = false

const handleNewClassAssign = ({element, toRemove, toAdd}) => {
  if(toAdd){
    if(typeof toAdd === typeof []){
      toAdd.forEach(className => {
        element.classList.add(className)
      })
    }
    else {
      element.classList.add(toAdd)
    }
  }
  if(toRemove){
    if(typeof toRemove === typeof []){
      toRemove.forEach(className => {
        element.classList.remove(className)
      })
    }
    else {
      element.classList.remove(toRemove)
    }
  }
}
const handlePrev = () => {
  if(!isTransitioning){
    isTransitioning = true
    let newPreviouserIndex = index - 3
    if(newPreviouserIndex < 0){
      newPreviouserIndex = maxIndex + newPreviouserIndex + 1
    }
    const previouser = getPreviouserImg()
    const nexter = getNexterImg()
    const active = getActiveImg()
    let prev = getPrevImg()
    let next = getNextImg()
    handleNewClassAssign({
      element: prev,
      toAdd: 'active',
      toRemove: 'prev'
    })
    handleNewClassAssign({
      element: active,
      toAdd: 'next',
      toRemove: 'active'
    })
    handleNewClassAssign({
      element: next,
      toAdd: 'nexter',
      toRemove: 'next'
    })
    handleNewClassAssign({
      element: nexter,
      toRemove: ['nexter', 'shown']
    })
    handleNewClassAssign({
      element: previouser,
      toRemove: 'previouser',
      toAdd: 'prev'
    })
    const newPreviouser = galleryImgBoxes[newPreviouserIndex]
    handleNewClassAssign({
      element: newPreviouser,
      toAdd: 'previouser'
    })
    prev = getPrevImg()
    next = getNextImg()
    prev.onclick = () => handlePrev()
    next.onclick = () => handleNext()
    setTimeout(() => {
      newPreviouser.classList.add('shown')
      isTransitioning = false
    }, 700)
    index--
    if(index < 0){
      index = maxIndex
    }
  }
}
const handleNext = () => {
  if(!isTransitioning){
    isTransitioning = true
    let newNexterIndex = index + 3
    if(newNexterIndex > maxIndex){
      newNexterIndex = newNexterIndex - maxIndex - 1
    }
    const previouser = getPreviouserImg()
    const nexter = getNexterImg()
    const active = getActiveImg()
    let prev = getPrevImg()
    let next = getNextImg()
    handleNewClassAssign({
      element: prev,
      toAdd: 'previouser',
      toRemove: 'prev'
    })
    handleNewClassAssign({
      element: active,
      toAdd: 'prev',
      toRemove: 'active'
    })
    handleNewClassAssign({
      element: next,
      toAdd: 'active',
      toRemove: 'next'
    })
    handleNewClassAssign({
      element: nexter,
      toAdd: 'next',
      toRemove: 'nexter'
    })
    handleNewClassAssign({
      element: previouser,
      toRemove: ['previouser', 'shown']
    })
    const newNexter = galleryImgBoxes[newNexterIndex]
    handleNewClassAssign({
      element: newNexter,
      toAdd: 'nexter'
    })
    index++
    if(index > maxIndex){
      index = 0
    }
    prev = getPrevImg()
    next = getNextImg()
    prev.onclick = () => handlePrev()
    next.onclick = () => handleNext()
    setTimeout(() => {
      newNexter.classList.add('shown')
      isTransitioning = false
    }, 700)
  }
}
prev.addEventListener('click', handlePrev)
next.addEventListener('click', handleNext)

window.addEventListener('DOMContentLoaded', () => {
  const prevImg = getPrevImg()
  const nextImg = getNextImg()
  prevImg.onclick = () => handlePrev()
  nextImg.onclick = () => handleNext()
})