"use strict"

const url = './form.php';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form')

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            let error = validateForm(form)

            let formData = new FormData(form);

            if (error === 0) {
                form.classList.add('_sending');

                let response = await fetch(url, {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    sentMessage(form)
                    form.reset();
                    form.classList.remove('_sending');
                }
                else {
                    failMessage(form)
                    form.classList.remove('_sending');
                }
            }

            else {
                fillAllFields(form)

                form.classList.remove('_sending');
            }

        })
    }

    function validateForm(form) {
        let error = 0;
        const formReq = [...form.querySelectorAll('[data-required] input')].concat([...form.querySelectorAll('[data-required] textarea')])

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i]

            formRemoveError(input);
            validateInput()

            input.addEventListener('input', function () {
                formRemoveError(input);
                validateInput()
            })

            function validateInput() {
                if (input.getAttribute('type') === 'email') {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
                }
                else {
                    if (input.getAttribute('name') === 'phone') {
                        if (/[_]/.test(input.value) || input.value.length < 18) {
                            formAddError(input);
                            error++;
                        }

                    }
                    else {
                        if (input.value.length < 2) {
                            formAddError(input);
                            error++;
                        }
                    }
                }
            }
        }

        return error;
    }

    function formAddError(input) {
        input.closest('.form__input').classList.add('_error');
    }

    function formRemoveError(input) {
        input.closest('.form__input').classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function sentMessage(form) {
        alert('Thank you. Your message has been sent.')
    }

    function failMessage(form) {
        alert('Error. Please try later.')
    }

    function fillAllFields(form) {
        alert('Fill in all the fields!')
    }
});