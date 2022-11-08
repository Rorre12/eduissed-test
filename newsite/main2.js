let navbar = ` 
<header>
	<nav class="navbar">
	<a href="./" class="nav-logo">EDUISSED</a>
		<ul class="nav-menu">
			<li class="nav-item">
				<a href="./aprende" class="nav-link">Aprende</a>
				<ul>
					<li><a href="./aprende/cuerpohumano">6. El Cuerpo Humano y el Desarrollo</a></li>
					<li><a href="./aprende/energia">7. La Energía</a></li>
				</ul>
			</li>
			<li class="nav-item">
				<a href="./acerca.html" class="nav-link">Acerca de nosotros</a>
			</li>
			<li class="nav-item">
				<a href="./contacto.html" class="nav-link">Contacto</a>
			</li>
		</ul>

		<button type="button" title="hamburger" class="hamburger">
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>
	</nav>
</header>
`;
document.body.insertAdjacentHTML("afterbegin", navbar);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}
