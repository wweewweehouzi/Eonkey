const presets = [
    ['@babel/env', {
        targets: {
            edg: "17",
            firefox: "60",
            chrome: "67",
            safari: "11.1"
        }
    }]
]

module.export = { presets };