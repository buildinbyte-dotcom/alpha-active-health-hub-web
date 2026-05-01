import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// We override transformIgnorePatterns AFTER next/jest processes the config to handle ESM-only packages
const baseConfigFactory = createJestConfig(config)

export default async function jestConfig() {
  const baseConfig = await baseConfigFactory()
  return {
    ...baseConfig,
    // Transform ESM-only packages that Jest can't parse natively
    transformIgnorePatterns: [
      'node_modules[/\\\\](?!(@portabletext|@sanity|next-sanity|nanoid|get-it|rxjs))',
    ],
  }
}
