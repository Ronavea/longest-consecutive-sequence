module.exports = function longestConsecutiveLength(array) {
  if(array.length == 0) return 0;
  if(array.length == 1) return 1;

  let longestNumber = 0;
  let count = 1;
  let numb;
  array.sort((a,b) => a - b);

  array.forEach(function(item,i,array){
    numb = item - array[i-1];

    if(numb == 1) {
      count++;
    }
    if(numb > 1) {
      if(count > longestNumber) {
        longestNumber = count;
      }
      count = 1;
    }
  });
  return longestNumber;
}
