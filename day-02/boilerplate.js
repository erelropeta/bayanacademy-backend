const fs = require('fs');

const folderName = process.argv[2] || 'Project';

const htmlBoilerPlate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

</head>
<body>
  
</body>
</html>`;

const cssBoilerPlate = `*,
::before,
::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
} 
`;

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }

  if (!fs.existsSync(`${folderName}/css`)) {
    fs.mkdirSync(`${folderName}/css`);
  }

  if (!fs.existsSync(`${folderName}/js`)) {
    fs.mkdirSync(`${folderName}/js`);
  }

  fs.writeFileSync(`${folderName}/index.html`, htmlBoilerPlate);
  fs.writeFileSync(`${folderName}/css/style.css`, cssBoilerPlate);
  fs.writeFileSync(`${folderName}/js/app.js`, '');
} catch (e) {
  console.log('Error: ', e);
}
