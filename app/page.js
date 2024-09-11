import Header from "./layout/header";
import Portada from "./layout/portada";
import Egresados from "./layout/egresados";
import Facultades from "./layout/facultades";
import Inscripcion from "./layout/inscripcion";
// import Footer from "./layout/footer";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Portada />
				<Egresados />
				<Facultades />
				<Inscripcion />
			</main>
			{/* <Footer /> */}
		</>
	);
}
