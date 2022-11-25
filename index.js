const { createApp } = Vue;

createApp({
  data() {
    return {
        title: 'Hello world',
        text:'text-para',
        paragraphContainer: 'paragraph-container',
        testoJsAllineato:'text-allineato',
        circle: 'circle-border',
        immagine: 'img/Vue-png.avif',

    }
  }
}).mount('#app')
