function getImgUrl (book) {
    return new URL(`/public/images/${book}`, import.meta.url)
}

export {getImgUrl}