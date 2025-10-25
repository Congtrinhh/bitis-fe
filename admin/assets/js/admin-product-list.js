$(document).ready(function () {
	//show/hide sidebar
	$("#toggleButton").click(function () {
		$("#sidebar").toggleClass("collapsed");
	});

	$(".overview-account-wrapper").click(function () {
		$(this).toggleClass("active");
		$("#accountMenu").toggleClass("active");
	});

	// set height table to keep it in the viewport
	const mainContentHeight = $(".main-content").height();
	const paginationHeight = $("#productPagination").outerHeight();
	const breadcrumbHeight = $("#breadcrumb").outerHeight();
	$(".table-wrapper").outerHeight(mainContentHeight - paginationHeight - breadcrumbHeight);

	// product table
	$.getJSON("data/products.json", function (products) {
		console.log(products);

		let rows = "";
		products.forEach(function (product) {
			rows += `
               <tr>
                <td>
                    <div class="product-col d-flex align-items-center gap-2">
                        <div class="img-parent">
                        <img src="${product.thumbnail}"
                        alt="${product.productName}"
                        />
                        </div>
                        <div class="name">${product.productName}</div>
                    </div>
                </td>
                <td>${product.category}</td>
                <td>${product.inStock}</td>
                <td>${product.price}</td>
                <td class="status-col">
                    <span class="badge rounded-pill text-bg-primary">${product.isActive ? "Active" : "Inactive"}</span>
                </td>
                <td>
                    <div class="action-col d-flex gap-2">
                        <div class="action-button view-button">
                            <i class="fa-solid fa-eye icon"></i>
                        </div>
                        <div class="action-button edit-button">
                            <i class="fa-solid fa-pen icon"></i>
                        </div>
                        <div class="action-button delete-button">
                            <i class="fa-solid fa-trash icon"></i>
                        </div>
                    </div>
                </td>
            </tr>
            `;
		});
		$("#productTable tbody").html(rows);
	});
});
