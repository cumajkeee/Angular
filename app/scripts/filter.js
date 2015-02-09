angular.module('customFilters', []).filter('textCut', function() {
  return function(text, num) {
    var shortedText, cutNum = num - 3;


    if (text.length >= cutNum){
      shortedText = text.substr(0, cutNum) + '...';
    } else {
      shortedText = text + '...';
    }

    return shortedText;
  };
});
