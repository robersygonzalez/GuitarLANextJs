import Link from "next/link"
import Layout from "../components/layout"

export default function Pagina404() {
  return (
    <Layout
        title={`Guitarras | 404`}
    >
       
        <p className="error">Página No Encontrada</p>
        <Link href="/">
            <a className="error-enlace">Ir a Inicio</a>
        </Link>
    </Layout>
  )
}
