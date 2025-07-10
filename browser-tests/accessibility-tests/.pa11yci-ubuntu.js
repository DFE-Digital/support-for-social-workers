const config = {
    defaults: {
        standard: 'WCAG2AA',
        chromeLaunchConfig: {
            executablePath: "/usr/bin/google-chrome"
        },
    },
};

function createPa11yCiConfiguration(defaults) {

    return {
        defaults: defaults,
    }
};

// Important ~ call the function, don't just return a reference to it!
module.exports = createPa11yCiConfiguration(config.defaults);
