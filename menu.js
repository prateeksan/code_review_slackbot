module.exports = {
  reviewing: function(text) {
    return text.replace("reviewing:", "").trim();
  },
  notes: function(text){
    return text.replace("notes:", "").trim();
  },
  score: function(text){
    return score.replace("score:", "").trim();
  }
};