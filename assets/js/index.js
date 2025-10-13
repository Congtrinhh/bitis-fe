// vẽ dot
//lấy số lượng ảnh
const carouselContainer = document.getElementById("heroCarousel");
const carouselItems = carouselContainer.querySelectorAll(".carousel-item");
const totalItems = carouselItems.length;

const dotContainer = document.getElementById("carouselDots");
for (let i = 0; i < totalItems; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	if (i === 0) {
		dot.classList.add("active");
	}

	//lắng nghe sk dot click
	dot.addEventListener("click", () => {
		goToSlide(i);
	});

	dotContainer.appendChild(dot);
}

const goToSlide = (index) => {
	//reset active class
	carouselItems.forEach((item) => item.classList.remove("active"));
	const dots = dotContainer.querySelectorAll(".dot");
	dots.forEach((dot) => dot.classList.remove("active"));
	// set active class cho item
	carouselItems[index].classList.add("active");
	dots[index].classList.add("active");
};

setInterval(() => {
	autoPlay();
}, 3000);

// auto play
const autoPlay = () => {
	//find current active index
	const currentIndex = Array.from(carouselItems).findIndex((item) => item.classList.contains("active"));
	let targetIndex = currentIndex + 1;
	// set next index to active
	if (targetIndex >= totalItems) {
		targetIndex = 0;
	}
	goToSlide(targetIndex);
};

const loadProducts = async (pageSize = 10, pageIndex = 0) => {
	try {
		const response = await fetch("./data/products.json");
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const products = await response.json();

		products.forEach((product) => appendProduct(product));
	} catch (error) {
		console.error("There has been a problem with your fetch operation:", error);
	}
};

/**
 * load sản phẩm bằng ajax
 */
function loadProductsAjax() {
	$.getJSON("../../data/products.json", function (products) {
		products.forEach((product) => appendProduct(product));
	});
}

$(document).ready(function () {
	loadProductsAjax();
});

/**
 * gán product item vào product list container
 */
const appendProduct = (product) => {
	const container = document.querySelector(".top-products > .container");

	const template = `<div class="product-wrapper">
						<div class="img-wrapper"><img src="${product.image}" alt="" /></div>
						<div class="product-info">
							<div class="size-color">
								<div class="size">1 Size</div>
								<div class="color">1 Màu sắc</div>
							</div>
							<div class="name">${product.name}</div>
							<div class="sell-info">
								<div class="price">${product.price.toLocaleString()} vnd</div>
								<div class="sold">Đã bán: 200</div>
							</div>
							<div class="icons">
								<div style="display: ${product.category === "new" ? "flex" : "none"}" class="label">Mới</div>
							</div>
						</div>
					</div>`;
	container.innerHTML += template;
};
