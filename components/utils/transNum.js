var EN = '0123456789';
var AR = '٠١٢٣٤٥٦٧٨٩';

var e2a = n => n.replace(/\d/g, d => AR[d]);
var a2e = n => n.replace(/[٠-٩]/g, d=>EN[AR.indexOf(d)]);

console.log(a2e("٩٥٩٩"));
console.log(e2a("125"));