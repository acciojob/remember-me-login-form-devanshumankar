const existing = document.querySelector("#existing")
const submitBtn = document.querySelector("#submit")
if (localStorage.length > 0) {
	existing.style.display = "inline"
} else{
	existing.style.display = "none"
}
submitBtn.addEventListener("click", () => {
	const userName = document.querySelector("#username")
	const password = document.querySelector("#password")
	const exists = document.querySelector("#checkbox")
	if (exists.checked) {
        localStorage.setItem(userName.value, password.value)
	}
    alert(`Logged in as ${userName.value}`)
})