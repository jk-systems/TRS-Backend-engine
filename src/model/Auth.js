const uuid = require("uuid")

const Auth = function(data) {
    this.data = data
    this.errors = []
  }
  
  Auth.prototype.validateUserInput = function() {
  if (this.data == "") {
    this.errors.push("Please enter value.")
    }
  }
  
Auth.prototype.generateUserTokens = () => {
  //pass
  id = uuid.v4()

  return id;
}

  module.exports = Auth