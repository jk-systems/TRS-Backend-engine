const Auth = function(data) {
    this.data = data
    this.errors = []
  }
  
  Auth.prototype.validateUserInput = function() {
  if (this.data == "") {
    this.errors.push("Please enter the name of the city.")
    }
  }
  
  module.exports = Auth