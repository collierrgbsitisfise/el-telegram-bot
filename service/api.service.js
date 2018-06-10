import rp from 'request-promise';
import { EL_API_URL, EL_API_PORT, API_PREFIX } from './../config/config';

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
        return `${EL_API_URL}:${EL_API_PORT}${API_PREFIX}/redirect-es-link/${shortLinkHash}`;
    } catch (err) {
        return 'oops some errors on our side';
    }
}