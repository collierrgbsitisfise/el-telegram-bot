module.exports = {
    regExp: {
        linkRegExp: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i
    },
    inlineQueryResp: {
        invalidLink: {
            'type': 'photo', 
            'photo_url': 'https://climatefeedback.org/wp-content/uploads/tags/HTag_Incorrect.png',
            'thumb_url': 'https://climatefeedback.org/wp-content/uploads/tags/HTag_Incorrect.png',
            'id': +Date.now(),
            'photo_width': 200,
            'photo_height': 200
        }
    }
}
