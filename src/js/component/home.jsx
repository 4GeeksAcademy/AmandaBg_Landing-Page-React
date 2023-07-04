import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";



//card 
const card = [

	{ image: "https://images.hola.com/imagenes/decoracion/20190625144609/ideas-decorar-casa-plantas/0-695-179/decorar-plantas-10m-m.jpg?tx=w_680", title: "Sala", description: "El diseño es una disciplina creativa que se encarga de la planificación, creación y desarrollo de objetos, sistemas, espacios y experiencias, con el objetivo de resolver problemas y mejorar la funcionalidad, estética y la calidad de vida de las personas.", buttonLabel: "Ver más" },
	{ image: "https://www.elmueble.com/medio/2019/03/15/plantas-salon_00488977-o_33d1cd74_1937x2000.jpg", title: "Cocina", description: "El diseño abarca una amplia gama de campos y áreas de aplicación, desde el diseño gráfico y el diseño industrial hasta el diseño de interiores, diseño de moda, diseño de productos y diseño de experiencia de usuario, entre otros. Cada uno de estos campos tiene sus propios principios, técnicas y herramientas, pero comparten la premisa fundamental de combinar la forma, la función y el contexto para lograr resultados efectivos.", buttonLabel: "Ver más" },
	{ image: "https://cdnm.westwing.com/image/upload/v1/contenthub/app/uploads/es/2021/12/20131138/rsz_21cw13_nl_carefreeplants-065-final.jpg", title: "Oficina", description: "El proceso de diseño generalmente sigue una serie de etapas que incluyen la investigación, la conceptualización, el desarrollo de prototipos, la evaluación y la producción final. Los diseñadores utilizan herramientas como dibujos a mano alzada, modelado en 3D, software de diseño asistido por computadora (CAD) y técnicas de visualización para desarrollar y comunicar sus ideas de manera efectiva", buttonLabel: "Ver más" },
	{ image: "https://cdnm.westwing.com/image/upload/v1/contenthub/app/uploads/es/2021/12/20145510/21CW13_NL_AAA_CarefreePlants-_Harry-004-Final.jpg", title: "Terraza", description: "Además de su función práctica, el diseño también desempeña un papel importante en la cultura y la sociedad. El diseño puede influir en la forma en que percibimos y experimentamos el mundo que nos rodea, y puede tener un impacto significativo en áreas como el arte, la moda, la arquitectura y la publicidad.", buttonLabel: "Ver más" }
];

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />

			<Jumbotron
				title="Diseño"
				description="Una de las funciones que lleva a cabo todo diseñador en la mayoría de los proyectos es la combinación entre texto e imagen. Aunque en un primer momento pueda parecer una tarea sencilla, lo cierto es que requiere de un amplio conocimiento teórico y práctico en la materia. Sin duda, el hábito hace al maestro, pero los consejos que encontrarás a continuación te ayudarán a concebir el diseño de texto como un elemento único e imprescindible del mensaje que deseas transmitir."
				buttonURL="https://es.wikipedia.org/wiki/Dise%C3%B1o"
				buttonLabel="Más información aquí" />

			<div className="card-group">
				{
					card.map((value, index) => {
						return <Card key={index} image={value.image} title={value.title} description={value.description} buttonLabel={value.buttonLabel} />
					})
				};
			</div>
			
			 <Footer
			 title= "CopyRigth.4GEEKS Academy"
			 /> 
			
		</div>
	);
};


export default Home;

