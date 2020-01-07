// eslint-disable-next-line @typescript-eslint/no-var-requires
const glob = require('glob');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');

glob('../src/**/*', (err, files) => {
  const data = files.map(file => {
    const ext = file.split('.').pop();
    // console.log(ext);
    if ((ext === 'ts' || ext === 'tsx') && !file.includes('.d.ts')) {
      return `'${file}'\n`;
    }
  });
  const filtered = data.filter(el => {
    return el != null;
  });
  //   console.log(filtered);
  const exportData = `const files = [${filtered}]; export default files;`;
  generateFileList(exportData);
});

const generateFileList = async files => {
  try {
    await fs.outputFile('files.js', files);
    console.log('done');
  } catch (err) {
    console.error(err);
  }
};
