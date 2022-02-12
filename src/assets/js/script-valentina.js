// Script JS di Valentina

// Chiamata Ajax per gestione file JSon (sezione Menu Navbar relativa alle lingue straniere supportate);
document.getElementById("btn-drop").addEventListener("mouseenter", mostraLista);

function mostraLista() {
    let ajax = new XMLHttpRequest();

    ajax.open("GET", url, true);
    ajax.onload = function () {
        if (this.status == 200) {
            let languages = JSON.parse(this.responseText);
            let show = "";

            for (let i in languages) {
                show += `
                    <li><a class="dropdown-item langs text-center" href="#">${languages[i].nativeName}</a></li>           
                    `
            }
            document.getElementById("lista-lingue").innerHTML = show;

        } else if (this.status == 404) {
            document.getElementById("lista-lingue").innerHTML = "Risorsa non trovata!";
        }
    }
    ajax.send();
}


// Script in JQuery per animazione Menu Dropdown in Hover;
$(document).ready(function () {
    $(".dropdown").hover(function () {
        let dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
});

// Submenu Javascript;
let element1 = document.getElementById("pills-home-tab");
let element2 = document.getElementById("pills-profile-tab");

element2.addEventListener('click', function () {
    element2.classList.add('green-b', 'secondary-v');
    element1.classList.remove("green-b", 'secondary-v');
})

element1.addEventListener('click', function () {
    element1.classList.add('green-b', 'secondary-v');
    element2.classList.remove("green-b", 'secondary-v');
})


// Grafico pagina Exchange;
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['10:00 PM', '01:00 AM', '04:00 AM', '08:00 AM', '11:00 AM', '02:00 PM'],
        datasets: [{
            data: [50.96, 50.75, 50.73, 50.84, 50.88, 50.99, 51.11],
            fill: true,
            backgroundColor: [
                '#CAF5EF'
            ],
            borderColor: [
                '#31D0AA'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxis: {
                display: false
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});