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
        help: {
            ru: `1) /link "ссылка" : создать короткую ссылку (🇷🇺)&#10;2)/once_available_link "ссылка" : создать короткую и единожды доступную ссылку (🇷🇺)&#10;3)/private_link "ссылка" : создать короткую и привтную(доступную только в приватном[инкогнито] режиме браузера) ссылку (🇷🇺)`,
            en: `1) /link "linkname" : create short link (🇺🇸)&#10;2)/once_available_link "linkname" : create short and once available link (🇺🇸)&#10;3)/private_link "linkname" : create short and private(wich available from private[incognito] browser mode) link (🇺🇸)`
        },
        start: {
            ru: `🇷🇺 Вас приветствуйте <b>ELSHARE BOT</b>.C моей помощью вы можете легко создовать <b>короткие</b> ссылик,<b>приватные</b> ссылки (ссылки которые можно открыть в приватном(инкогнито) режиме),ссылки , которые будут доступны <b>единожды</b>`,
            en: `🇺🇸 You are welcome <b> ELSHARE BOT </b> .With my help, you can easily create <b> short </b> link, <b> private </b> links (links that can be opened from private (incognito) mode), links that will be available <b> once </b>`
        }   
    }
}
