exports.fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/jpg" || file.mimetype == "image/png") {
        cb(null, true);
    } else {
        cb("خطا در نوع عکس", false);
    }
};
