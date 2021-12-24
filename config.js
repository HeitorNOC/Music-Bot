module.exports = {
    app: {
        px: '!',
        token: 'OTIzOTg0ODI4NTc0MDg1MTYx.YcX97Q.szYnZ0esSQsSCv3jQtElk9w4EE8',
        playing: 'by Heitor ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};