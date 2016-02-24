module.exports = {
  student: function(text) {
    return text.replace("student:", "").trim();
  },
  notes: function(text){
    return text.replace("notes:", "").trim();
  },
  score: function(text){
    return text.replace("score:", "").trim();
  }
};