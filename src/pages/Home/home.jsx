import React from 'react'
import MovieRow from '../../components/MovieRow/movieRow'
import FeaturedMovie from './Destacada';

const Home = () => {
  const destacada = {
    titulo: "Arcane",
    descripcion: "Una historia oscura donde nada es lo que parece. El terror se esconde en cada decisión.",
    backdrop: "https://i.pinimg.com/736x/81/88/24/81882449079972374e74bdcf7065a53a.jpg" 
  };

  const peliculasPopulares = [
    {
      id: 1,
      titulo: "El Conjuro",
      imagen: "https://i.pinimg.com/736x/b2/98/ba/b298ba6883451e68e0081babf03fe94c.jpg",
    },
    {
      id: 2,
      titulo: "IT",
      imagen: "https://es.web.img3.acsta.net/pictures/17/04/07/12/58/197841.jpg",
    },
    {
      id: 3,
      titulo: "Veronica",
      imagen: "https://i0.wp.com/www.generacionfriki.es/wp-content/uploads/2018/01/Veronica-Generacion-Friki-PORTADA.jpg?w=618&ssl=1 ",
    },
    {
      id: 4,
      titulo: "Hallowen 2",
      imagen: "https://m.media-amazon.com/images/M/MV5BY2YyN2U1YjctMzMyNS00YmQyLWI5ZjUtYjUwMWU0MmYxZmU1XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 5,
      titulo: "Terrifier 2",
      imagen: "https://m.media-amazon.com/images/S/pv-target-images/8cc7641430477be20c195d8b9f4248fb9cf344ccf6b978f313f19aa8ebc503e6.jpg",
    },
    {
      id: 6,
      titulo: "IT",
      imagen: "https://es.web.img3.acsta.net/pictures/17/04/07/12/58/197841.jpg",
    },

  ];


  const peliculasComedia = [
    {
      id: 7,
      titulo: "SON COMO NIÑOS 2",
      imagen: "https://m.media-amazon.com/images/M/MV5BZTVhMWIxNWQtMDk5Ny00YzNlLTgxMGEtYjQ3MDNhNjg4Y2NmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 8,
      titulo: "¿QUÉ PASÓ AYER?",
      imagen: "https://i.pinimg.com/474x/69/c9/94/69c994685640898daec8ab0e508dc05d.jpg",
    },
    {
      id: 9,
      titulo: "LOS COLEGAS DEL BARRIO",
      imagen: "https://es.web.img2.acsta.net/medias/nmedia/18/92/94/88/20226785.jpg",
    },
    {
      id: 10,
      titulo: "SCARY MOVIE",
      imagen: "https://images.justwatch.com/poster/8712000/s718/scary-movie.jpg",
    },
    {
      id: 11,
      titulo: "DEADPOOL 2",
      imagen: "https://m.media-amazon.com/images/M/MV5BNGY3N2ZhYmMtYTlmYi00ZWIzLWJiZWMtMjgxMjljYTk3MDAwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 12,
      titulo: "CHIQUITO PERO PELIGROSO",
      imagen: "https://m.media-amazon.com/images/M/MV5BMTI0NTA3MjI3NV5BMl5BanBnXkFtZTcwNTI1ODYzMQ@@._V1_FMjpg_UX1000_.jpg",
    },

  ];
  const peliculasAnimada = [
    {
      id: 13,
      titulo: "SING",
      imagen: "https://akamai.sscdn.co/uploadfile/letras/playlists/5/c/9/d/5c9d93e2ee95424fb6d0149bd879dbb9.jpg",
    },
    {
      id: 15,
      titulo: "SUPER MARIO BROS",
      imagen: "https://m.media-amazon.com/images/M/MV5BMGQ3YjMwZDctZTkwNi00NmZjLWEyYmItZGFiYTYyMDUzZjFjXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 16,
      titulo: "GATO CON BOTAS EL ULTIMO DESEO",
      imagen: "https://dx35vtwkllhj9.cloudfront.net/universalstudios/puss-in-boots-the-last-wish/images/regions/es/share.png",
    },
    {
      id: 17,
      titulo: "ZOOTOPIA 2",
      imagen: "https://oem.com.mx/elsoldesinaloa/img/23419127/1747779479/BASE_LANDSCAPE/480/image.webp",
    },
    {
      id: 18,
      titulo: "MI VILLANO FAVORITO",
      imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDw99MqGn5dwN0XtLz0sYd_5lq1xiwuNjFSfS497TSjehmogrjkvZv4C-B4ltX9reMKw1XS4ErqbHZjk3Xmp3U1helz7_fQ3rsr-PQx_JKa5gz8ozoazPLkmuDs4-UNHHL4Jcx5kDypzXo/w1200-h630-p-k-no-nu/Poster+mi+villano+favorito+(2).jpg",
    },
    {
      id: 19,
      titulo: "KUNG FU PANDA 2",
      imagen: "https://m.media-amazon.com/images/M/MV5BMmQ4YjdiNGUtNTQ1ZS00YjA2LWE1ZjYtOGQ5MjcxZDRiMDM1XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
    },


  ];

  return (
    <>

    <FeaturedMovie movie={destacada} />
    <div className="container text-light">
      <MovieRow title="TERROR" movies={peliculasPopulares} />
      <MovieRow title="COMEDIAS" movies={peliculasComedia} />
      <MovieRow title="ANIMADAS" movies={peliculasAnimada} />
    </div>

    </>
  )
}

export default Home