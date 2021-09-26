const Auth = function(data) {
    this.data = data
    this.errors = []
  }
  
  Auth.prototype.validateUserInput = function() {
  if (this.data == "") {
    this.errors.push("Please enter value.")
    }
  }
  
  module.exports = Auth