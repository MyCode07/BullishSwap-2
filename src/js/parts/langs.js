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
// getLangs();



let allLang = [];
const langsElem = document.querySelector('.multilanguage');
const openBtn = langsElem.querySelector('button');
const label = langsElem.querySelector('button label');
const langs = langsElem.querySelectorAll('li a');

openBtn.addEventListener('click', (е) => {
    langsElem.classList.toggle('_open');
})


langs.forEach(lang => {
    const langCode = lang.textContent.toLowerCase();
    allLang.push(langCode)



    lang.addEventListener('click', (e) => {
        e.preventDefault();

        label.textContent = lang.textContent
        langsElem.classList.remove('_open')

        langs.forEach(item => {
            item.classList.remove('_selected')
        })

        lang.classList.add('_selected')
        changeURLLanguage(lang.dataset.lang);
    })
})


function changeURLLanguage(langCode) {
    location.href = window.location.pathname + '#' + langCode;
    location.reload();
}


function changeLanguage(data) {
    let hash = window.location.hash;
    hash = hash.substr(1);

    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }

    label.textContent = hash;

    for (let key in data) {
        let elem = document.querySelector(`[data-ml="${key}"]`);
        if (elem) {
            elem.innerHTML = data[key][hash];
        }
    }

    langs.forEach(item => {
        item.classList.remove('_selected')

        if (item.dataset.lang == hash) {
            item.classList.add('_selected')
        }
    })

}

changeLanguage(langsArray);
