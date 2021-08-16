var container = document.getElementById("array");
function generatearray() {
for (var i = 0; i < 20; i++) {
	var value = Math.ceil(Math.random() * 100);
	var array_ele = document.createElement("div");
	array_ele.classList.add("block");
	array_ele.style.height = `${value * 3}px`;
	array_ele.style.transform = `translate(${i * 30}px)`;
	var array_ele_label = document.createElement("label");
	array_ele_label.classList.add("block_id");
	array_ele_label.innerText = value;
	array_ele.appendChild(array_ele_label);
	container.appendChild(array_ele);
	}
}

async function Heapify(n, i) {
var blocks = document.querySelectorAll(".block");
var largest = i; // Initialize largest as root
var l = 2 * i + 1; // left = 2*i + 1
var r = 2 * i + 2; // right = 2*i + 2

if (
	l < n &&
	Number(blocks[l].childNodes[0].innerHTML) >
	Number(blocks[largest].childNodes[0].innerHTML)
)
	largest = l;

if (
	r < n &&
	Number(blocks[r].childNodes[0].innerHTML) >
	Number(blocks[largest].childNodes[0].innerHTML)
)
	largest = r;

if (largest != i) {
	var temp1 = blocks[i].style.height;
	var temp2 = blocks[i].childNodes[0].innerText;
	blocks[i].style.height = blocks[largest].style.height;
	blocks[largest].style.height = temp1;
	blocks[i].childNodes[0].innerText =
	blocks[largest].childNodes[0].innerText;
	blocks[largest].childNodes[0].innerText = temp2;

	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 250)
	);
	await Heapify(n, largest);
}
}
async function HeapSort(n) {
var blocks = document.querySelectorAll(".block");
for (var i = n / 2 - 1; i >= 0; i--) {
	await Heapify(n, i);
}
for (var i = n - 1; i > 0; i--) {
	var temp1 = blocks[i].style.height;
	var temp2 = blocks[i].childNodes[0].innerText;
	blocks[i].style.height = blocks[0].style.height;
	blocks[0].style.height = temp1;
	blocks[i].childNodes[0].innerText =
	blocks[0].childNodes[0].innerText;
	blocks[0].childNodes[0].innerText = temp2;

	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 250)
	);
	await Heapify(i, 0);
}
}

generatearray();

