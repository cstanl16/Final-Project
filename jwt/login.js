
function login() {
    const data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    };
    axios.post('/api/login', data)
    .then(res => {
        console.log(res);
    });
}
