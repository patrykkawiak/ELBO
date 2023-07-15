const section = document.querySelector('.breaker-cards');
export const handlePrallax = () => {
    if(window.innerWidth < 992) return
    let scrollValue = window.scrollY;
    const observer = scrollValue - section.offsetTop + window.innerHeight;
    const rate = observer / 6.5;
      section.style.transform = `translateY(calc(4rem - ${rate}px))`;
  }