function rot13(str) {
var newstr = '';
for(var i = 0 ;i<str.length;i++){
  newstr += shiftLetter(str[i], 13);
}return newstr;
 function shiftLetter(l,s){
l = l.toUpperCase();
const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var newInd = (list.indexOf(l)+s)%26;
return list.includes(l)?list[newInd]:l;
 }}

rot13("SERR PBQR PNZC");
