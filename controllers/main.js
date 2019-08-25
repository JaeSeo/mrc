exports.getIndex = (req, res, next) => {
    res.render('index');
};

exports.postMessages = (req, res, next) => {
    const phone = req.body.phone;
    const messages = req.body.messages;
    // console.log(phone);
    // console.log(messages);
    res.render('index');
};