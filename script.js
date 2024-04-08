const topStrip = document.querySelector('.top-strip');

window.addEventListener('scroll', () => {
  const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  topStrip.style.width = `${scrollPercentage}%`;
});
