# vite-plugin-virtual

[![npm version](https://badgen.net/npm/v/vite-plugin-virtual)](https://www.npmjs.com/package/vite-plugin-virtual)
[![monthly downloads](https://badgen.net/npm/dm/vite-plugin-virtual)](https://www.npmjs.com/package/vite-plugin-virtual)
[![license](https://badgen.net/npm/license/vite-plugin-virtual)](https://github.com/patak-js/vite-plugin-virtual/blob/main/LICENSE)

> Virtual modules with HMR plugin for [Vite](https://github.com/vitejs/vite)

## Getting Started

Install Vite Plugin Virtual:

```bash
$ npm install -D vite-plugin-vite
```

Add to your `vite.config.js`:

```js
import { virtual } from 'vite-plugin-virtual'

export default {
  plugins: [
    virtual({
      'virtual:module': 'export default { hello: 'world' }',
      'virtual:object': { hello: 'world' }
    })
  ]
}
```

## Updating virtual modules

You can update the virtual module during dev

```js
import virtual, { updateVirtualModule } from 'vite-plugin-virtual'

const plugin = virtual({
  'virtual:module': 'export default { hello: 'world' }',
  'virtual:object': { hello: 'world' }
})

updateVirtualModule( plugin, 'virtual:object', { hello: 'new message' } )
```

## Manual invalidation

You can invalidate the virtual module during dev in case the config changes

```js
import virtual, { invalidateVirtualModule } from 'vite-plugin-virtual'

const modules = {
  'virtual:module': 'export default { hello: 'world' }',
  'virtual:object': { hello: 'world' }
}

const plugin = virtual(modules)

const server: ViteDevServer

modules['virtual:object'] = { hello: '!' }
invalidateVirtualModule(server,'virtual:object')
```


## Overview

You can invalidate the virtual module during dev in case the config changes

```js
import virtual, { invalidateVirtualModule } from 'vite-plugin-virtual'

const modules = 

const plugin = virtual({
  'virtual:module': 'export default { hello: 'world' }',
  'virtual:object': { hello: 'world' }
})

updateVirtualModule(plugin, 'virtual:object', { hello: '!' })
```

## License

MIT License © 2021 [patak-js](https://github.com/patak-js)
