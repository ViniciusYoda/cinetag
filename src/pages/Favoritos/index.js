import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

export default function Favoritos() {
   return(
      <>
         <Banner imagem='favoritos' />
         <Titulo>
            <h1>Meus Favoritos</h1>
         </Titulo>
         <section className={styles.container}>
            <Card id='1' titulo='wrwfwf' capa='fws' />
         </section>
      </>
   )
}