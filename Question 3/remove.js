const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDirectory)) {
    fs.readdirSync(logsDirectory).forEach((file) => {
        const filePath = path.join(logsDirectory, file);
        console.log('Delete files...'+file);

        fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logsDirectory);
} else {
    console.log('Logs directory does not exist.');
}
