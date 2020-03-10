rm -rf ./lib &&
NODE_ENV=production ./node_modules/.bin/babel ./src --out-dir ./lib --copy-files --compact &&
rm -rf ./lib/index.js &&
rm -rf ./lib/config.json &&
mv ./lib/App.js ./lib/index.js
