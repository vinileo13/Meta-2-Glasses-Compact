/* =================================
   ANIMAÇÃO AO ROLAR A PÁGINA
================================= */


const elementos =
    document.querySelectorAll(
        ".caracteristicas-1, .caracteristicas-2, img, h2, h4"
    );


const observador =
    new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add(
                        "visivel"
                    );

                }

            });

        },

        {
            threshold: 0.2
        }

    );


elementos.forEach(function (elemento) {

    observador.observe(elemento);

});



/* =================================
   EFEITO DE MOVIMENTO DO MOUSE
================================= */


document.addEventListener(
    "mousemove",
    function (evento) {

        const imagem =
            document.querySelector("img");

        if (!imagem) return;


        const x =
            (window.innerWidth / 2 - evento.clientX)
            / 60;


        const y =
            (window.innerHeight / 2 - evento.clientY)
            / 60;


        imagem.style.setProperty(
            "--mouse-x",
            x + "px"
        );

        imagem.style.setProperty(
            "--mouse-y",
            y + "px"
        );

    }
);
