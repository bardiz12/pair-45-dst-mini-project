export const convertFormToObject = (form) => {
    const formData = form instanceof FormData ? form : new FormData(form)

    return Array.from(formData.keys()).reduce((prev, key) => {
        prev[key] = formData.get(key)
        return prev;
    }, {});
}

export const getTmdbImageUrl = (path, size) => `https://image.tmdb.org/t/p/w${size}${path}`

export const getOffset = (elm) => {
    const rect = elm.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}