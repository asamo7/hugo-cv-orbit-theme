var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./public/index.html', 'utf8');
var options = { base: './static' };

pdf.create(html, options).toFile('./public/cv.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});
