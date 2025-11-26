let fs = require('fs');

//let data = fs.readFileSync('read.txt', 'utf8');//blocking code only move to next line when readFileSync is done
//console.log(data);

//fs.writeFileSync('write.txt', `${data} in second file`);//blocking code only move to next line when writeFileSync is done

fs.readFile('read.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error', err);
    } else {
        console.log(data);
        fs.writeFile('write.txt', `${data} in second file`, (err) => {
            if (err) {
                console.log('Error', err);
            } else {
                console.log('Write complete');
            }
        });
    }
});

console.log('After readFile');//non-blocking code move to next line without waiting for readFile to be done
 fs.unlink('write.txt', (err) => {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('File deleted');
    }
});

fs.mkdir('newDir', function(err){
    fs.readFile('read.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error', err);
        } else {
            fs.writeFile('./newDir/write.txt', `${data} in second file`, (err) => {
                if (err) {
                    console.log('Error', err);
                } else {
                    console.log('Write complete in newDir');
                }
            });
        }
    });
});