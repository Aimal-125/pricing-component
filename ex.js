let slider = document.querySelector("#range-slider");
let amount = document.querySelector(".amount");
let pageViews = document.querySelector(".pageviews");
let mobileAmount = document.querySelector(".mobile-amount");
let toggleBtn = document.querySelector(".switch");

pageViews.innerText = slider.value;
amount.innerText = "24.00";
mobileAmount.innerText = "24.00";
slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${slider.value / 10}%, hsl(224, 65%, 95%) ${slider.value / 10}%)`;

slider.addEventListener("input", () => {
	pageViews.innerText = slider.value;
	switch(slider.value) {
	case "0":
		amount.innerText = "0.00";
		mobileAmount.innerText = "0.00";
		pageViews.innerText = "0";
		break;
	case "10":
		amount.innerText = "8.00";
		mobileAmount.innerText = "8.00";
		break;
	case "50":
		amount.innerText = "12.00";
		mobileAmount.innerText = "12.00";
		break;
	case "100":
		amount.innerText = "16.00";
		mobileAmount.innerText = "16.00";
		break;
	case "500":
		amount.innerText = "24.00";
		mobileAmount.innerText = "24.00";
		break;
	case "1000":
		amount.innerText = "36.00";
		mobileAmount.innerText = "36.00";
		break;
	}
	if(slider.value > 500 && slider.value < 1000) {
		amount.innerText = "24.00";
		mobileAmount.innerText = "24.00";
	}
	if(slider.value > 100 && slider.value < 500) {
		amount.innerText = "16.00";
		mobileAmount.innerText = "16.00";
	}
	if(slider.value > 50 && slider.value < 100) {
		amount.innerText = "12.00";
		mobileAmount.innerText = "12.00";
	}
	if(slider.value > 10 && slider.value < 50) {
		amount.innerText = "8.00";
		mobileAmount.innerText = "8.00";
	}
	slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${slider.value / 10}%, hsl(224, 65%, 95%) ${slider.value / 10}%)`;
});

slider.addEventListener("keydown", () => {
	let key = event.key;
	if(key === "ArrowRight" || key === "ArrowUp") {
		switch(slider.value) {
		case "0":
			slider.setAttribute("step", "10");
			break;
		case "10":
			slider.setAttribute("step", "50");
			break;
		case "50":
			slider.setAttribute("step", "50");
			break;
		case "100":
			slider.setAttribute("step", "500");
			break;
		case "500":
			slider.setAttribute("step", "500");
			break;
		}
	}
	if(key === "ArrowLeft" || key === "ArrowDown") {
		switch(slider.value) {
		case "10":
			slider.removeAttribute("step");
			slider.value = "1";
			break;
		case "50":
			slider.removeAttribute("step");
			slider.value = "11";
			break;
		case "100":
			slider.removeAttribute("step");
			slider.value = "51";
			break;
		case "500":
			slider.removeAttribute("step");
			slider.value = "101";
			break;
		}
	}
});

slider.addEventListener("mousedown", () => {
	slider.removeAttribute("step");
});

toggleBtn.addEventListener("keydown", () => {
	let key = event.key;
	if(key === "Enter") {
		toggleBtn.click();
	}
});

toggleBtn.addEventListener("click", () => {
	toggleBtn.classList.toggle("checked");
	if(toggleBtn.classList.contains("checked")) {
		switch(slider.value) {
		case "10":
			amount.innerText = `${8 * 0.25}.00`;
			mobileAmount.innerText = `${8 * 0.25}.00`;
			break;
		case "50":
			amount.innerText = `${12 * 0.25}.00`;
			mobileAmount.innerText = `${12 * 0.25}.00`;
			break;
		case "100":
			amount.innerText = `${16 * 0.25}.00`;
			mobileAmount.innerText = `${16 * 0.25}.00`;
			break;
		case "500":
			amount.innerText = `${24 * 0.25}.00`;
			mobileAmount.innerText = `${24 * 0.25}.00`;
			break;
		case "1000":
			amount.innerText = `${36 * 0.25}.00`;
			mobileAmount.innerText = `${36 * 0.25}.00`;
			break;
		}
	} else {
		switch(slider.value) {
		case "10":
			amount.innerText = "8.00";
			mobileAmount.innerText = "8.00";
			break;
		case "50":
			amount.innerText = "12.00";
			mobileAmount.innerText = "12.00";
			break;
		case "100":
			amount.innerText = "16.00";
			mobileAmount.innerText = "16.00";
			break;
		case "500":
			amount.innerText = "24.00";
			mobileAmount.innerText = "24.00";
			break;
		case "1000":
			amount.innerText = "36.00";
			mobileAmount.innerText = "36.00";
			break;
		}
	}
});

slider.addEventListener("input", () => {
	if(toggleBtn.classList.contains("checked")) {
		switch(slider.value) {
		case "10":
			amount.innerText = `${8 * 0.25}.00`;
			mobileAmount.innerText = `${8 * 0.25}.00`;
			break;
		case "50":
			amount.innerText = `${12 * 0.25}.00`;
			mobileAmount.innerText = `${12 * 0.25}.00`;
			break;
		case "100":
			amount.innerText = `${16 * 0.25}.00`;
			mobileAmount.innerText = `${16 * 0.25}.00`;
			break;
		case "500":
			amount.innerText = `${24 * 0.25}.00`;
			mobileAmount.innerText = `${24 * 0.25}.00`;
			break;
		case "1000":
			amount.innerText = `${36 * 0.25}.00`;
			mobileAmount.innerText = `${36 * 0.25}.00`;
			break;
		}
		if(slider.value > 10 && slider.value < 50) {
			amount.innerText = `${8 * 0.25}.00`;
			mobileAmount.innerText = `${8 * 0.25}.00`;
		}
		if(slider.value > 50 && slider.value < 100) {
			amount.innerText = `${12 * 0.25}.00`;
			mobileAmount.innerText = `${12 * 0.25}.00`;
		}
		if(slider.value > 100 && slider.value < 500) {
			amount.innerText = `${16 * 0.25}.00`;
			mobileAmount.innerText = `${16 * 0.25}.00`;
		}
		if(slider.value > 500 && slider.value < 1000) {
			amount.innerText = `${24 * 0.25}.00`;
			mobileAmount.innerText = `${24 * 0.25}.00`;
		}
		if(slider.value == 1000) {
			amount.innerText = `${36 * 0.25}.00`;
			mobileAmount.innerText = `${36 * 0.25}.00`;
		}
	} else {
		switch(slider.value) {
		case "10":
			amount.innerText = "8.00";
			mobileAmount.innerText = "8.00";
			break;
		case "50":
			amount.innerText = "12.00";
			mobileAmount.innerText = "12.00";
			break;
		case "100":
			amount.innerText = "16.00";
			mobileAmount.innerText = "16.00";
			break;
		case "500":
			amount.innerText = "24.00";
			mobileAmount.innerText = "24.00";
			break;
		case "1000":
			amount.innerText = "36.00";
			mobileAmount.innerText = "36.00";
			break;
		}
	}
});