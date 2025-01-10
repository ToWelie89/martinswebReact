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

fs.symlink("/var/www/martinswebReact/pi",
        "/var/www/martinswebReact/dist/pi", 'dir', (err) => {
  if (err)
    console.log(err);
  else {
    console.log("\nSymlink created\n");
  }
})
fs.symlink("/var/www/martinswebReact/sti",
        "/var/www/martinswebReact/dist/sti", 'dir', (err) => {
  if (err)
    console.log(err);
  else {
    console.log("\nSymlink created\n");
  }
})
fs.symlink("/var/www/martinswebReact/totalrisk",
        "/var/www/martinswebReact/dist/totalrisk", 'dir', (err) => {
  if (err)
    console.log(err);
  else {
    console.log("\nSymlink created\n");
  }
})
fs.symlink("/var/www/martinswebReact/pi/Cults3DSellerStats/dist",
        "/var/www/martinswebReact/dist/cults", 'dir', (err) => {
  if (err)
    console.log(err);
  else {
    console.log("\nSymlink created\n");
  }
})
};

run();
