const mock = require('../mocks/mock');

exports.getDeliveryDetailsAdmin = function(request, response) {
    try {
        const respData = mock.delivery_mock;
        response.status(200).send(respData);
    } catch (err) {
        console.log(err);
        respData = { message: 'Something Went Wrong.' }
        response.status(500).send(respData);
    }
}


exports.getParcelDetailsUser = function(request, response) {
    try {
        const respData = mock.parcel_mock;
        response.status(200).send(respData);
    } catch (err) {
        console.log(err);
        respData = { message: 'Something Went Wrong.' }
        response.status(500).send(respData);
    }
}

exports.changeDeliveryStatus = function(request, response) {
    try {
        const reqBody = request.body;
        console.log(reqBody);
        const deliveryMock = mock.delivery_mock.delivery_data;
        var respData = {};
        deliveryMock.forEach(elm => {
            if (elm.itm_id == reqBody.itm_id) {
                elm['dlvry_status'] = reqBody.dlvry_status;
                respData = { message: 'Delivery Status Updated Successfully.', status: 200 }
            }
        });
        if (respData.status == 200) {
            response.status(200).send(respData);
        } else {
            respData = { message: "Item not found. Invalid Item Id.", status: 404 }
            response.status(200).send(respData);
        }
    } catch (err) {
        console.log(err);
        respData = { message: 'Something Went Wrong.' }
        response.status(500).send(respData);
    }
}