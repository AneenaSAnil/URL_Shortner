# URL_Shortner
Commands for Server setup
After cloning the code from the repo. Follow the commands mentioned below.

1. Open the terminal and run,

npm install

2. To start the server run

npm start

3. Generate short URL
TUse the URL mentioned below and replace the link keyword with the original URL as in the json.

http://localhost:8000/url/

BodyParams

{
    url:link
}

4. To redirect to Original URL
Use the URL mentioned below and replace the link keyword with the short URL as in the json.

http://localhost:8000/url/short-url

BodyParams
{
    url:original URL
}
