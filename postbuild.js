import fs from 'fs';

const copyFolder = (from, to, recursive = true) => {
    return new Promise((resolve, reject) => {
        fs.cp(from, to, { recursive }, (err) => {
            if (err) {
                console.error('Error copying folder:', err);
                reject();
            } else {
                console.log('Folder copied successfully!');
                resolve();
            }
        });
    });
}

const run = async () => {
    console.log('POSTBUILD SCRIPT');
    await copyFolder('src/js/', 'dist/src/js');
    await copyFolder('src/assets', 'dist/src/assets');
    await copyFolder('src/documents', 'dist/src/documents');
    await copyFolder('src/miscFiles', 'dist/src/miscFiles');
    await copyFolder('.htaccess', 'dist/.htaccess');
};

run();