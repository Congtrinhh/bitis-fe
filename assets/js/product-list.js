let isNavbarOpen = false;
function toggleNavbar() {
	isNavbarOpen = !isNavbarOpen;
	document.getElementById("navbar").classList.toggle("active", isNavbarOpen);
	document.querySelector("body").classList.toggle("no-scroll", isNavbarOpen);
}
