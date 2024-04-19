import React from "react";
import '../Inicio/Index.css'

const Inicio = () => {
  const htmlCode = `
        <!-- Tu código HTML aquí -->
        <!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electro Start</title>
    <link rel="stylesheet" href="/Inicio.css">
    <link rel="shortcut icon" href="../../img/minilogo.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Plus+Jakarta+Sans:wght@300&family=Space+Grotesk:wght@400;500;600&display=swap"
        rel="stylesheet">
</head>

<body
">

    <header class="header"
">

        <div class="menu container" 
">

            <a href="#" class="logo"></a>
            <input type="checkbox" id="menu">
            <label for="menu">
                <img src="" class="menu-icono" alt="">
            </label>
            <nav class="navbar">
                <ul>
                    <li><a href="/Login"
">Inicio Sesión</a></li>
                    <li><a href="/Signup"
">Registro</a></li>
                </ul>
            </nav>
        </div>

        <div class="header-content container">

            <div class="header-txt"
">
                <h1 
">Electro Star</h1>
                <span
">Tienda de Video Juegos</span>
            </div>

            <div class="header-dir"
">

                <div class="dir"
">
                    <h3>Dirección</h3>
                    <p>Cl. 46 # 51A 26-318</p>
                </div>

                <div class="dir"
">
                    <h3>Teléfono</h3>
                    <p>555 5555</p>
                </div>

                <div class="dir" 
">
                    <h3>Horario</h3>
                    <p>9am - 9pm</p>
                </div>
            </div>
        </div>
    </header>

    <section class="welcome"
">

        <div class="welcome-1"
"></div>

        <div class="welcome-2"
">
            <h2 style="
    font-size: 50px;
    color: #fff;
    text-align: center;
    margin-bottom: 35px;
">¡Bienvenido!</h2>
            <p 
">
                Aqui podrás encontrar todo lo que necesitas para disfrutar al máximo de tus videojuegos favoritos.
                Ofrecemos una amplia selección de juegos para todas las consolas, desde los clásicos hasta las últimas
                novedades. También contamos con una gran variedad de accesorios para mejorar tu experiencia de juego.
            </p>
            <a href="https://www.google.com/maps/place/Cl.+46+%2351a-26,+La+Candelaria,+Medellín,+La+Candelaria,+Medellín,+Antioquia/@6.2467819,-75.5726603,17z/data=!3m1!4b1!4m6!3m5!1s0x8e442855b93d98d7:0xe92642850293d90d!8m2!3d6.2467766!4d-75.5700854!16s%2Fg%2F11pckj8d0x?hl=es"
                target="_blank" class="btn-1" 
">Let´s Go!</a>
        </div>
    </section>
    <main class="services container"
">

        <div class="services-txt" style="
    margin-bottom: 100px;
">
            <hr style="
    border-top: 2px solid #650008;
    width: 50%;
    margin: auto;
">
            <h2 style="
            color: #fff;
            font-size: 30px;
            margin-top: 20px;
            margin-bottom: 20px;
">Nuestros Servicios</h2>
            <hr style="
    border-top: 2px solid #060047;
    width: 50%;
    margin: auto;
">
        </div>

        <div class="boxesContainer" style="
    display: flex;
    justify-content: space-around;
">
 
            <div class="cardBox" style="
    width: 300px;
    height: 300px;
    margin: 0 20px;
">
              <div class="card" style="
    width: 300px;
    height: 400px;
    perspective: 1000px;
">
                <div class="front" 
">
                  <h3 style="
    color: aliceblue;
    font-size: 24px;
    margin-bottom: 10px;
">VideoJuegos</h3>
                  <p style="
    color: white;
">Pasa el cursor para voltear</p>
                  <strong 
">↺</strong>
                </div>
                <div class="back" style="
    width: 100%;
    height: 100%;
    color: white;
    font-size: 18px;
    padding: 10px;
    transform: rotateY(180deg);
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    transition: transform 1s;
    margin-buttom: 5px;
">
                  <h3 style="
    color: aliceblue;
    font-size: 24px;
    margin-bottom: 10px;
">Video Juegos</h3>
                  <p 
">Ofrecemos una amplia variedad de juegos para todas las edades y niveles de habilidad. Ya sea que
                    estés buscando un juego de acción, aventura, estrategia o deportes, tenemos algo para todos.</p>
                </div>
              </div>
            </div>
           
            <div class="cardBox" 
">
              <div class="card" style="
    width: 300px;
    height: 400px;
    perspective: 1000px;
">
                <div class="front"
">
                  <h3 
">Consolas</h3>
                  <p 
">Pasa el cursor para voltear</p>
                  <strong 
">↺</strong>
                </div>
                <div class="back" style="
    width: 100%;
    height: 100%;
    color: white;
    font-size: 18px;
    padding: 10px;
    transform: rotateY(180deg);
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    transition: transform 1s;
">
                  <h3 style="
    color: aliceblue;
    font-size: 24px;
    margin-bottom: 10px;
">Consolas</h3>
                  <p style="
    color: white;
    text-align: center;
">Encontrarás las marcas más populares, incluyendo Xbox, PlayStation y Nintendo. Todas nuestras
                    consolas son de alta calidad y están diseñadas para ofrecer la mejor experiencia.</p>                  
                </div>
              </div>
            </div>
           
            <div class="cardBox" style="
    width: 300px;
    height: 300px;
    margin: 0 20px;
">
              <div class="card" style="
    width: 300px;
    height: 400px;
    perspective: 1000px;
">
                <div class="front" 
">
                  <h3 
">Accesorios</h3>
                  <p 
">Pasa el cursor para voltear</p>
                  <strong 
">↺</strong>
                </div>
                <div class="back" style="
    width: 100%;
    height: 100%;
    color: white;
    font-size: 18px;
    padding: 10px;
    transform: rotateY(180deg);
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    transition: transform 1s;
">
                  <h3 
">Accesorios</h3>
                  <p 
">Están diseñados para aumentar tu comodidad y precisión durante el juego.
                    Ofrecemos una amplia gama de accesorios, desde auriculares y controles hasta teclados y ratones
                    especiales para juegos. </p>
                </div>
              </div>
            </div>
          </div>
    </main>

    <section class="personal container" 
">

        <div class="personal-txt" 
">
            <hr style="
    border-top: 2px solid #f9f7f7;
    width: 50%;
    margin: auto;
">
            <h2 style="
    color: #fff;
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
">Desarrolladores</h2>
            <hr style="
    border-top: 2px solid #f9f7f7;
    width: 50%;
    margin: auto;
">
            <p style="
    font-size: 20px;
    line-height: 2;
">Somos un equipo de desarrolladores se compone de tres estudiantes de la Tecnología de Sistematización de
                Datos en el Politécnico Colombiano Jaime Isaza Cadavid. Cada uno de nosotros cuentamos con habilidades y
                conocimientos complementarios, lo que nos permite trabajar juntos de manera eficiente y eficaz.
            </p>
        </div>

        <div class="personal-group" 
">

            <div class="personal-1" style="
    background-color: #f9f7f7;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
">
    <img src="../../../img/Cinthia.jpg" alt="Cinthia" style="
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
">
                <h3 style="
    margin-bottom: 10px;
">Cinthia Serna</h3>
                <p style="
    margin-bottom: 20px;
">Desarrolladora Fronted.</p>
            </div>

            <div class="personal-1" style="
    background-color: #f9f7f7;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
">
                <img src="../../../img/Esteban.jpg" alt="" style="
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
">
                <h3 style="
    margin-bottom: 10px;
">Esteban Garcia</h3>
                <p style="
    margin-bottom: 20px;
">Desarrollador Backend.</p>
            </div>

            <div class="personal-1" style="
    background-color: #f9f7f7;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
">
                <img src="../../../img/Sara.jpg" alt="Sara" style="
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
">
                <h3 style="
    margin-bottom: 10px;
">Sara Morales</h3>
                <p style="
    margin-bottom: 20px;
">Desarrolladora FullStack.</p>
            </div>

        </div>

    </section>

    <footer 
">

">
            </form>
        </div>

        <div class="footer-txt" style="
    margin-top: -50px;
">
            <p>
                © Electro Star | 2023 - 1
            </p>
        </div>

    </footer>

</body>

</html>
    `;

  return <div dangerouslySetInnerHTML={{ __html: htmlCode }} />;
};

export default Inicio;
