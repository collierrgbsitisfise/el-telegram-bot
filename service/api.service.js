import rp from 'request-promise';
import settings from './../config/config';

const {
    EL_API_URL,
    EL_API_PORT,
    API_PREFIX
} = settings;

module.exports.createShortLink = async (link) => {
    const options = {
        method: 'GET',
        uri: `${EL_API_URL}:${EL_API_PORT}${API_PREFIX}/create-es-link`,
        qs: {
            link
        },
        json: true
    }

    try {
        const { shortLinkHash } = await rp(options);
        return `${EL_API_URL}/${shortLinkHash}`;
    } catch (err) {
        return 'oops some errors on our side 🔥🔥🔥🔥🔥🔥';
    }
}

module.exports.createPrivateShortLink = async (link) => {
    const options = {
        method: 'GET',
        uri: `${EL_API_URL}:${EL_API_PORT}${API_PREFIX}/create-es-link`,
        qs: {
            link,
            privateOnly: true
        },
        json: true
    }

    try {
        const { shortLinkHash } = await rp(options);
        return `${EL_API_URL}/${shortLinkHash}`;
    } catch (err) {
        return 'oops some errors on our side 🔥🔥🔥🔥🔥🔥';
    }
}