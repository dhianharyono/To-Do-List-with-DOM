document.addEventListener("DOMContentLoaded", function () {
 
    const submitForm = document.getElementById("form");
 
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault(); // berfungsi untuk mencegah behaviour asli agar tidak dijalankan
        addTodo();
    });
});