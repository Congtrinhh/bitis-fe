/**
 * xử lý khi bấm nút "đăng nhập": validate form trước khi submit
 * @param {*} e
 */
function handleSubmit(e) {
	// chặn hành vi submit mặc định của browser để validate form trước khi submit
	e.preventDefault();

	// lấy ra form element
	const formEl = e.target;

	// lấy ra tất cả input elements bên trong form
	const inputEls = formEl.querySelectorAll("input");

	// biến lưu trạng thái form có hợp lệ hay không
	let isFormValid = true;

	// lặp qua tất cả input elements và validate từng input
	for (let i = 0; i < inputEls.length; i++) {
		const inputEl = inputEls[i];
		const isValid = validateOnInput({ target: inputEl });

		if (!isValid) {
			isFormValid = false;
		}
	}

	// nếu cả form hợp lệ thì truyền dữ liệu form lên server
	if (isFormValid) {
		formEl.submit();
	}
}

/**
 * validate input khi người dùng nhập dữ liệu:
 * - nếu input rỗng thì hiển thị lỗi và trả về false
 * - nếu input không rỗng thì ẩn lỗi và trả về true
 * @param {*} e
 * @returns
 */
function validateOnInput(e) {
	const inputEl = e.target;
	const value = inputEl.value;
	console.log(value);

	if (value === "" || value === null || value === undefined) {
		inputEl.classList.add("error");
		inputEl.parentElement.querySelector(".error-message").classList.add("active");

		return false;
	} else {
		inputEl.classList.remove("error");
		inputEl.parentElement.querySelector(".error-message").classList.remove("active");

		return true;
	}
}
