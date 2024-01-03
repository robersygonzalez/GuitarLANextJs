import Image from 'next/future/image'
import Layout from "../components/layout";
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, guitarLA, tienda de música"}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />

            <div>
              <p>Praesent vehicula ex at lobortis porta. Ut porttitor odio non rhoncus auctor. Sed congue tempus dolor, ac luctus lacus ultrices sed. Suspendisse et odio mauris. Aliquam pharetra laoreet felis, vestibulum consectetur est. Nunc gravida et felis hendrerit efficitur. Morbi euismod lectus eget tellus elementum, eget iaculis tellus ornare. Aenean vehicula purus nec gravida auctor. Sed orci ex, rutrum quis lectus ac, scelerisque commodo nunc. Nulla aliquam nulla diam, mattis tempus eros iaculis vel. Aliquam sit amet augue eu arcu ullamcorper tincidunt ac ac risus. Sed aliquet lorem sit amet erat vehicula congue a id risus.</p>
              <p>
              Pellentesque porttitor libero congue egestas elementum. Fusce sollicitudin sollicitudin purus at consequat. Mauris laoreet aliquet ligula, ac semper libero pretium sit amet. Maecenas elit massa, tristique et leo non, ornare tristique dolor. Curabitur luctus molestie libero, tincidunt auctor eros varius vitae. Quisque eget aliquet turpis. Maecenas sed porttitor metus, non rhoncus tellus. Quisque porta, erat scelerisque lobortis suscipit, est neque blandit purus, in efficitur turpis leo tincidunt orci. 
              </p>
            </div>
        </div>
      </main>
    </Layout>
  );
}
