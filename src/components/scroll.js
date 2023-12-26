// Scroll.js
const scrollToContent = () => {
    const contentElement = document.querySelector('.content');
    contentElement.scrollIntoView({ behavior: 'smooth' });
  };
  
  export default scrollToContent;
  