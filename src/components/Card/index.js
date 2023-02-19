import { useFavoritoContext } from 'components/Contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

export default function Card({ id, titulo, capa}) {
   const [favorito, adiconarFavorito] = useFavoritoContext();
   const ehFavorito = favorito.some((fav) => fav.id === id);
   const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
   return(
      <div className={styles.container}>
         <Link
            className={styles.container}
            to={`/${id}`}
         >
            <img
               src={capa}
               alt={titulo}
               className={styles.capa}
            />
            <h2>{titulo}</h2>
         </Link>
         <img
            src={icone}
            alt="favoritar filme"
            className={styles.favoritar}
            onClick={() => {
               adiconarFavorito({ id, titulo, favorito })
            }}
         />
      </div>
   )
}