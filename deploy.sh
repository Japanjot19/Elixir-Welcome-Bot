echo "Kill all the running PM2 actions"
pm2 kill

echo "Jump to app folder"
cd /home/ubuntu/Elixir-Welcome-Bot

echo "Update app from Git"
git pull

echo "Install app dependencies"
npm install

echo "Run new PM2 action"
pm2 start index.js
