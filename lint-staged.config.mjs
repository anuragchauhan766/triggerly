import path from 'path'

const buildEslintCommand = (filenames) =>
    `next lint --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --file ')}`

const config = {
    'src/**/*.{js,jsx,ts,tsx}': ['pnpm run format', buildEslintCommand],
    '*.{css,scss,less}': ['prettier --write']
}

export default config