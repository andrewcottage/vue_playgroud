
var app = new Vue({
  el: '#app',
  data: {
    name: "",
    link: "",
    question: "",
    location: "",
    radius: "",
    fields: []
  },
  methods: {
    saveForm: function () {
      if (this.validateForm()) {
        this.fields.push({
          question: this.question,
          location: this.location,
          radius: this.radius
        })
        this.clearForm()
      } else {
        alert("fill out all fields")
      }
    },
    clearForm: function () {
      this.question = "";
      this.location = "";
      this.radius = "";
    },
    validateForm: function () {
      if (this.location == "" && this.radius == "" && this.question == ""){
        return false
      } else {
        return true
      }
    },
    editField: function (e) {
      console.log(e.target)
    }
  }
})
