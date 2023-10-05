const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
}

process.chdir(logsDirectory);

for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    const filePath = path.join(logsDirectory, fileName);
    const text = `This is log file ${i}.`;

    fs.writeFileSync(filePath, text);

    console.log(fileName);
}
