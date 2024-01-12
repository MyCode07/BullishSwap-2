async function getLangs() {
    const file = '../../files/langs.json';
    let response = await fetch(file, {
        method: "GET"
    });

    if (response.ok) {
        let result = await response.json();
        changeLanguage(result);
    }
    else {
        alert("Error");
    }
}


let allLang = [];
const langsElem = document.querySelector('.multilanguage');
const openBtn = document.querySelector('.multilanguage button');
const label = document.querySelector('.multilanguage button label');
const langs = document.querySelectorAll('.multilanguage li a');

if (openBtn) {
    openBtn.addEventListener('click', (е) => {
        langsElem.classList.toggle('_open');
    })
}

langs.forEach(lang => {
    const langCode = lang.textContent.toLowerCase();
    allLang.push(langCode)

    lang.addEventListener('click', (e) => {
        e.preventDefault();

        label.textContent = lang.textContent
        langsElem.classList.remove('_open')

        langs.forEach(item => {
            if (lang.dataset.lang == item.dataset.lang) {
                lang.classList.add('_selected')
            }
            else {
                item.classList.remove('_selected')
            }
        })

        localStorage.setItem('hash', lang.dataset.lang)
        changeLanguage(langsArray);
    })
})

function changeLanguage(data) {
    let hash = localStorage.getItem('hash');
    if (!hash) {
        allLang.forEach(lag => {
            if (lag === 'en') {
                localStorage.setItem('hash', 'en')
                hash = localStorage.getItem('hash');
            }
        });
    }

    if (label) {
        label.textContent = hash;
    }

    for (let key in data) {
        let elems = document.querySelectorAll(`[data-ml="${key}"]`);

        if (elems.length && data[key][hash]) {
            elems.forEach(el => {
                el.innerHTML = data[key][hash];
            })
        }
    }

    langs.forEach(item => {
        if (item.dataset.lang == hash) {
            item.classList.add('_selected')
        }
        else {
            item.classList.remove('_selected')
        }
    })
}

changeLanguage(langsArray);
