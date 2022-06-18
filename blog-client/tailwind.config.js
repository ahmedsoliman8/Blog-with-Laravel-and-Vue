module.exports = {
    mode: 'jit', // or 'media' or 'class'
    content: [
        "./src/**/*.{html, js, ts, vue}",
        "./src/**/*"
    ],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
           require('@tailwindcss/typography'),
        //  require('@tailwindcss/forms'),
    ],
}
