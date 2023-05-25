// users hardcoded for simplicity, store in a db for production applications
// const users = [
//     { id: 1, username: 'basicUser', password: 'basicPassword', firstName: 'Basic', lastName: 'User' },
//     { id: 2, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    const usuario = usuario.find(u => u.username === username && u.password === password);
    if (usuario) {
        const { password, ...userWithoutPassword } = usuario;
        return true;
    }
    return false;
}

async function getAll() {
    return usuario.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}