let navbar = `
<nav class="navbar">
<!-- Logo -->
<figure class="logo">
	<a href="/index.html"
		><img
			src="/resources/images/eduissed_logo.png"
			alt="logo" /></a
	><span id="eduissed-header">EDUISSED</span>
</figure>

<!-- Links of navbar -->
<ul class="nav-menu">
<li class="aprende nav-item">
				<button type="button" class=" aprende">Aprende</button>
				<!-- dropdown-->
				<ul class="dropdown">
					<li><a href="/aprende/relaciones">1. Relaciones</a></li>
					<li><a href="/aprende/valores">2. Valores</a></li>
					<li><a href="/aprende/genero">3. Género</a></li>
					<li><a href="/aprende/seguridad-y-violencia">4. Seguridad personal</a></li>
					<li><a href="/aprende/salud-bienestar">5. Salud y bienestar</a></li>
					<li><a href="/aprende/cuerpo-humano">6. El Cuerpo Humano</a></li>
					<li><a href="/aprende/sexualidad">7. Sexualidad</a></li>
					<li><a href="/aprende/salud-sexual">8. Salud sexual y reproductiva</a></li>
				</ul>
			</li>
	<li class="nosotros nav-item">
		<a class="nav-link" href="/pages/nosotros.html">Nosotros</a>
	</li>
	
	<li class="contacto nav-item">
		<a class="nav-link" href="/pages/contacto.html">Contacto</a>
	</li>
</ul>
<button type="button" title="hamburger" class="hamburger">
	<span class="bar"></span>
	<span class="bar"></span>
	<span class="bar"></span>
</button>
</nav>`;

document.body.insertAdjacentHTML("afterbegin", navbar);
