import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Timelock REST API</span>,
  project: {
    link: 'https://github.com/currentsea/checktimelockverify_rest_api_docs',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/currentsea/checktimelockverify_rest_api_docs',
  footer: {
    text: 'REST API Documentation for creating timelocks',
  },
}

export default config
