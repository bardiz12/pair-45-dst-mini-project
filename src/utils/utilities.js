export const convertFormToObject = (form) => {
    const formData = form instanceof FormData ? form : new FormData(form)

    return Array.from(formData.keys()).reduce((prev, key) => {
        prev[key] = formData.get(key)
        return prev;
    }, {});
}

export const getTmdbImageUrl = (path, size) => {
    if (path === undefined || path === null) {
        return path
    }

    return path.slice(0, 5) === '/http' ? path.slice(1) : `https://image.tmdb.org/t/p/w${size}${path}`
}

export const getOffset = (elm) => {
    const rect = elm.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}