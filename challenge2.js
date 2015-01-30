var array = process.argv;

var getElements = function() {

  var total = 0;

  array.forEach( function(element, index) {

    if (index >= 2) {
      total += +element;
    };

  });

  console.log(total);

};

getElements();