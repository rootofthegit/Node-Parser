const parser = require('./parser');

async function start() {
  try {
    const ads = await parser('LINK TO PARSE HERE');
    console.log(ads);
  } catch (e) {
    console.log(e);
  }

  process.exit(0);
}

start();