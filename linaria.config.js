const nodeModulesRegExp = /[\\/]node_modules[\\/]/;

module.exports = {
    rules: [
        {
            action: require.resolve('@linaria/shaker'),
        },
        {
            test: nodeModulesRegExp,
            action: 'ignore',
        },
        {
            test: (filename, code) => {
                if (!nodeModulesRegExp.test(filename)) {
                    return false;
                }

                return /(?:^|\n|;)\s*(?:export|import)\s+/.test(code);
            },
            action: require.resolve('@linaria/shaker'),
        }
    ]
};