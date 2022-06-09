const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const edad = document.getElementById('edad');
const sexo = document.getElementById('sexo');
const pais = document.getElementById('pais');

form.addEventListener('submit', e => {
    e.preventDefault();

    validaciones();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validaremail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validaciones = () => {
    
    const valornombre = nombre.value.trim();
    const valorapellido = apellido.value.trim();
    const valoremail = email.value.trim();



    if(valornombre === '') {
        setError(nombre, 'Debe ingresar su nombre');
    }else if(valornombre.length < 3) {
        setError(nombre, 'El nombre debe contener al menos 3 caracteres');
    } else {
        setSuccess(nombre);
    }
    

}