const app=document.getElementById('typewriter');
const typewriter = new Typewriter(app,{
    loop:true,
    delat:75
});

typewriter
    .typeString('¡Hola! Soy Jesus Aponte')
    .pauseFor(100)
    .start();