import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    // HTMLとbodyの設定
    html: {
      width: '100%',
      height: '100%'
    },
    body: {
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      backgroundColor: 'gray.100',
      color: 'gray.800'
    },
    // root要素の設定
    '#root': {
      width: '100%',
      minHeight: '100vh'
    }
  },
  theme: {
    tokens: {
      colors: {},
      fonts: {
        body: { value: "'Noto Sans JP', sans-serif" },
        heading: { value: "'Noto Sans JP', sans-serif" }
      }
    }
  }
})

export const system = createSystem(defaultConfig, config)
