window.addEventListener("DOMContentLoaded", (event) => {
    const btnEl = document.getElementById('#btn')
    btnEl.addEventListener('click', toasting)
    function toasting() {
        let myAlert = document.querySelector('.toast');
        let bsAlert = new bootstrap.Toast(myAlert);
        setTimeout(
            bsAlert.show()
        , 2000)
    }
})
