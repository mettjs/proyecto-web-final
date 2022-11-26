const fila = document.querySelector('.contenedor-carousel');
const fila2 = document.querySelector('.contenedor-accion-carousel');
const fila3 = document.querySelector('.contenedor-romance-carousel');
const fila4 = document.querySelector('.contenedor-terror-carousel');
const peliculas = document.querySelectorAll('.pelicula');
const peliculaas = document.querySelectorAll('.peliculaa');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');
const pelicula = document.getElementById('pelicula');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ------------ Hover (tendencias) -----------
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

// ------------ Hover-2 (generos) ----------------
peliculaas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculaas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

//Salid hover tendencias

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});

// Salida hover genero peliculas

fila2.addEventListener('mouseleave', () => {
	peliculaas.forEach(pelicula => pelicula.classList.remove('hover'));
});

fila3.addEventListener('mouseleave', () => {
	peliculaas.forEach(pelicula => pelicula.classList.remove('hover'));
});

fila4.addEventListener('mouseleave', () => {
	peliculaas.forEach(pelicula => pelicula.classList.remove('hover'));
});


