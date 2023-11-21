<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parallax effect</title>
    <link rel="stylesheet" href="parallax.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Poppins' ,sans-serif;
}
html{
    font-size: 16px;
}
.wrapper{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 10px;
}
.container{
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    z-index: -1;
}
.background{
    transform: translateZ(-40px) scale(6);
}
.foreground{
    transform: translateZ(-20px) scale(3);
}
.background,.foreground{
    position: absolute; /* to overlap the images */
    height: 100%;
    width: 100%;
    z-index: -1;
    object-fit: cover;
}
h1{
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10rem;
    letter-spacing: 4px;
    color: white;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

section{
    background-color: rgb(45,45,45);
    color: white;
    padding: 5rem 0;
}

.secHeading{
    font-size: 5rem;
    padding: 0 10rem;
}

.text{
    font-size: 1.5rem;
    padding: 0 10rem;
    margin: 5rem 0;
}
.bg1{
    background-image: url(images/sport-1.jpg);
}

.bg2{
    background-image: url(images/sport-2.jpg);
}

.bg3{
    background-image: url(images/sport-3.jpg);
}

.bg{
    position: relative;
    width: 100%;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    height: 500px;
}

.desc{
    position: absolute;
    background-color: white;
    padding: 0.5rem 2.5rem;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) ;
    color: black;
    font-size: 3.5rem;
    font-weight: 600;
}
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="container">
            <img src="images/background.png" class="background">
            <img src="images/foreground.png" class="foreground">
            <h1>ADVENTURE</h1>
        </div>

        <section>
            <h2 class="secHeading">Adventure Time!</h2>
            <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus commodi alias? Veritatis, eligendi nisi. Amet exercitationem, recusandae dolore corrupti laborum aperiam repellendus natus voluptatem quam atque aliquam beatae. Odit deserunt nisi optio eveniet? Aliquam possimus molestiae, ullam illum accusamus autem accusantium! Voluptate laboriosam eum saepe ex veritatis est? Numquam eaque autem labore provident dolorum, velit omnis mollitia eos adipisci!
                <br> <br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, itaque hic tempore rem eveniet sed repudiandae molestiae magnam aut quod consequatur, harum, totam beatae fugiat ipsam? Explicabo, blanditiis quod similique fugiat fugit ea expedita deleniti doloribus, delectus perferendis, tempore amet maiores libero sapiente voluptatem reprehenderit? Illum alias commodi cupiditate corporis mollitia ab quaerat, ipsum est excepturi vitae a sunt optio.
            </p>
            
            <!-- here bg1,2,3 contains the images -->

            <div class="bg bg1">
                <h2 class="desc">BIKING</h2>
            </div>
            <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus commodi alias? Veritatis, eligendi nisi. Amet exercitationem, recusandae dolore corrupti laborum aperiam repellendus natus voluptatem quam atque aliquam beatae. Odit deserunt nisi optio eveniet? Aliquam possimus molestiae, ullam illum accusamus autem accusantium! Voluptate laboriosam eum saepe ex veritatis est? Numquam eaque autem labore provident dolorum, velit omnis mollitia eos adipisci!
                <br> <br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, itaque hic tempore rem eveniet sed repudiandae molestiae magnam aut quod consequatur, harum, totam beatae fugiat ipsam? Explicabo, blanditiis quod similique fugiat fugit ea expedita deleniti doloribus, delectus perferendis, tempore amet maiores libero sapiente voluptatem reprehenderit? Illum alias commodi cupiditate corporis mollitia ab quaerat, ipsum est excepturi vitae a sunt optio.
            </p>

            <div class="bg bg2">
                <h2 class="desc">PARA GLIDING</h2>
            </div>
            <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus commodi alias? Veritatis, eligendi nisi. Amet exercitationem, recusandae dolore corrupti laborum aperiam repellendus natus voluptatem quam atque aliquam beatae. Odit deserunt nisi optio eveniet? Aliquam possimus molestiae, ullam illum accusamus autem accusantium! Voluptate laboriosam eum saepe ex veritatis est? Numquam eaque autem labore provident dolorum, velit omnis mollitia eos adipisci!
                <br> <br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, itaque hic tempore rem eveniet sed repudiandae molestiae magnam aut quod consequatur, harum, totam beatae fugiat ipsam? Explicabo, blanditiis quod similique fugiat fugit ea expedita deleniti doloribus, delectus perferendis, tempore amet maiores libero sapiente voluptatem reprehenderit? Illum alias commodi cupiditate corporis mollitia ab quaerat, ipsum est excepturi vitae a sunt optio.
            </p>

            <div class="bg bg3">
                <h2 class="desc">SURFING</h2>
            </div>
            <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus commodi alias? Veritatis, eligendi nisi. Amet exercitationem, recusandae dolore corrupti laborum aperiam repellendus natus voluptatem quam atque aliquam beatae. Odit deserunt nisi optio eveniet? Aliquam possimus molestiae, ullam illum accusamus autem accusantium! Voluptate laboriosam eum saepe ex veritatis est? Numquam eaque autem labore provident dolorum, velit omnis mollitia eos adipisci!
                <br> <br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, itaque hic tempore rem eveniet sed repudiandae molestiae magnam aut quod consequatur, harum, totam beatae fugiat ipsam? Explicabo, blanditiis quod similique fugiat fugit ea expedita deleniti doloribus, delectus perferendis, tempore amet maiores libero sapiente voluptatem reprehenderit? Illum alias commodi cupiditate corporis mollitia ab quaerat, ipsum est excepturi vitae a sunt optio.
            </p>

        </section>

    </div>
</body>
</html>
