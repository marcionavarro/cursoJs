const validator = require('validator');

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passInput = el.querySelector('input[name="password"]');
        let error = false;

        if (!validator.isEmail(emailInput.value)) {
            alert('E-mail inválido');
            error = true;
        }

        if (passInput.value.length < 3 || passInput.value.length > 50) {
            alert('A senha precisa ter entre 3 e 50 caracteres');
            error = true;
        }

        if (!error) el.submit();
    }

}