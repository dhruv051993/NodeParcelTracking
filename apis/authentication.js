const mock = require('../mocks/mock');

exports.authenticateUser = function(request, response) {
    try {
        const reqBody = request.body;
        var respData = {};
        const authMock = mock.auth_mock.auth_data;
        authMock.forEach(elm => {
            if (elm.username == reqBody.username && elm.password == reqBody.password) {
                respData = { data: { username: elm.username, role: elm.role }, message: "Login Successfull" };
            }
        });
        if (respData.data) {
            response.status(200).send(respData);
        } else {
            respData = { message: "Invalid Credentials" }
            response.status(401).send(respData);
        }
    } catch (err) {
        console.log(err);
        respData = { message: 'Something Went Wrong.' }
        response.status(500).send(respData);
    }
}