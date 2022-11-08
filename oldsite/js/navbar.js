let navbar = `
<nav class="navbar">
<!-- Logo -->
<figure class="logo">
	<a href="../index.html"
		><img
			src="../resources/images/eduissed_logo.png"
			alt="logo" /></a
	><span id="eduissed/header">EDUISSED</span>
</figure>

<!-- Links of navbar -->
<ul class="nav-menu">
	<li class="nosotros nav-item">
		<a class="nav-link" href="./nosotros.html">Nosotros</a>
	</li>
	<li class="aprende nav-item">
		<a class="nav-link" href="./aprende.html">Aprende</a>
		<!-- dropdown-->
		<ul class="dropdown">
			<li><a href="#">Tema 1</a></li>
			<li><a href="#">Tema 2</a></li>
			<li><a href="#">Tema 3</a></li>
			<li><a href="#">Tema 4</a></li>
			<li><a href="#">Tema 5</a></li>
			<li><a href="#">Tema 6</a></li>
			<li><a href="#">Tema 7</a></li>
			<li><a href="#">Tema 8</a></li>
		</ul>
	</li>
	<li class="contacto nav-item">
		<a class="nav-link" href="./contacto.html">Contacto</a>
	</li>
</ul>
<button type="button" title="hamburger" class="hamburger">
	<span class="bar"></span>
	<span class="bar"></span>
	<span class="bar"></span>
</button>
</nav>`;

document.body.insertAdjacentHTML("afterbegin", navbar);
