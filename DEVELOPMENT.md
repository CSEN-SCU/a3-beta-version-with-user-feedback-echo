## Development instructions

- `node 10.x (lts/dubnium)` is the working version for this setup
- `nvm use` in the root to switch to this node version

The css changes should be applied only in `app.scss` and other `_<>.scss` files. The final compressed
css files will be written to `app.css`.

### Development


#### Chrome

- `yarn debug:chrome` will run gulp task (`gulp debug-chrome-remindoro`) and will build th files
- `yarn start:chrome` will run the extension locally using `webext`

