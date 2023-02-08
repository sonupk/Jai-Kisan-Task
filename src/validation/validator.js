 //_________________________________________request body validation_________________________________________
 const isValidRequestBody = function (object) {
    return Object.keys(object).length > 0;
  };
  //_________________________________________email validation_________________________________________
  const isValidEmail = function (email) {
    const regexForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexForEmail.test(email);
  };
  
  //_________________________________________mobile number validation_________________________________________
  const isValidMobile = function (mobile) {
    const regexFormobile = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    return regexFormobile.test(mobile);
  };
  const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId);
  };
  
  