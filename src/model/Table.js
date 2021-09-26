const Table = function(data) {
    this.data = data
    this.errors = []
  }
  
  Table.prototype.validateUserInput = function() {
  if (this.data == "") {
    this.errors.push("Please enter the name of the city.")
    }
  }
  
  module.exports = Table