module.exports = {
  term: function(trigger, text) {
    return text.replace(trigger, "").trim();
  }
};