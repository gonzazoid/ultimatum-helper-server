# ultimatum-helper-server

Example of updating a self-hosted extension for Ultimatum.

```
git clone https://github.com/gonzazoid/ultimatum-helper-server.git
cd ultimatum-helper-server
npm install
node index.js
```

You now have a web server running on 3000 port.

Start Ultimatum, open http://127.0.0.1:3000

Click on the [ext] link. You'll see modal window asking you if you are sure, confirm your action. You now have the extension installed.

Go to chrome://extensions/, you'll see this extension in the list. Please note the version is 0.0.1.

Now click the update button (upper left corner of the chrome://extensions/ tab) - now your extension is updated and its version is 0.0.2.

The extension is builded from [extended_permissions_webext](https://github.com/gonzazoid/extended_permissions_webext), nothing special about that except one field in the manifest:

```
  "update_url": "http://127.0.0.1:3000/update.ext"
```

[more information](https://developer.chrome.com/docs/extensions/how-to/distribute/host-on-linux#update_url)

Index.js is pretty much self-explanatory, no need to explain.
