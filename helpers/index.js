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
    },
    cmd: {
        start: {
            ru: `🇷🇺 Вас приветствуйте <b>ELSHARE BOT</b>.C моей помощью вы можете легко создовать <b>короткие</b> ссылик,<b>приватные</b> ссылки (ссылки которые можно открыть в приватном(инкогнито) режиме),ссылки , которые будут доступны <b>единожды</b>`,
            en: `🇺🇸 You are welcome <b> ELSHARE BOT </b> .With my help, you can easily create <b> short </b> link, <b> private </b> links (links that can be opened from private (incognito) mode), links that will be available <b> once </b>`
        }   
    }
}
