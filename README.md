# vite-plugin-virtual

[![npm version](https://badgen.net/npm/v/vite-plugin-virtual)](https://www.npmjs.com/package/vite-plugin-virtual)
[![monthly downloads](https://badgen.net/npm/dm/vite-plugin-virtual)](https://www.npmjs.com/package/vite-plugin-virtual)
[![license](https://badgen.net/npm/license/vite-plugin-virtual)](https://github.com/patak-js/vite-plugin-virtual/blob/main/LICENSE)

> Virtual modules with HMR plugin for [Vite](https://github.com/vitejs/vite)

## Getting Started

Install Vite Plugin Virtual:

```bash
$ npm install -D vite-plugin-virtual
```

Add to your `vite.config.js`:

```js
import virtual from 'vite-plugin-virtual'

export default {
  plugins: [
    virtual({
      'virtual:module': `export default { hello: 'world' }`,
      'virtual:config': { hello: 'world' }
    })
  ]
}
```

In your sources you can now import the virtual modules

```js
import obj from 'virtual:config'

console.log(obj)
```

## Updating virtual modules

You can update the virtual module during dev

```js
import virtual, { updateVirtualModule } from 'vite-plugin-virtual'

const plugin = virtual({
  'virtual:module': `export default { hello: 'world' }`,
  'virtual:config': { hello: 'world' },
  'virtual:something-else': () => return `Hello ${'computed'} world`,
})

updateVirtualModule( plugin, 'virtual:config', { hello: 'new message' } )
```

## Manual invalidation

You can invalidate the virtual module during dev in case the config changes

```js
import virtual, { invalidateVirtualModule } from 'vite-plugin-virtual'

const modules = {
  'virtual:module': `export default { hello: 'world' }`,
  'virtual:config': { hello: 'world' }
}

const plugin = virtual(modules)

const server: ViteDevServer

modules['virtual:config'] = { hello: 'new message' }
invalidateVirtualModule(server, 'virtual:config')
```

## Modifying the plugin

If you are using this plugin to simplify building your own plugin, you may want to change the plugin name, and some other config.

```js
import type { Plugin } from 'vite'
import virtual from 'vite-plugin-virtual'

export function virtualPlugin(): Plugin {
  return {
    ...(virtual as any).default({
      'virtual:your-plugin': 'export const hello = "world"',
    }),
    name: 'your-plugin:virtual',
    enforce: 'post', // You can modify the plugin here.
  }
}
```

## Credits

- Adapted logic from [@rollup/plugin-virtual](https://github.com/rollup/plugins/tree/master/packages/virtual)
- Project setup adopted from [@antfu's Vite plugins](https://github.com/antfu/vite-plugin-pwa)

## License

MIT License © 2021 [patak-js](https://github.com/patak-js)
