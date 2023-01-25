
const extract = (category, key) => {
    let slug = key.replace('./', '')
    let content = require(`/content/${category}/${slug}`)
    content['slug'] = slug.replace('.json', '')
    return content
}

export const CollectionLoader = {
    art: () => require.context('/content/art', true, /.json$/).keys().map((key) => extract('art', key)),
    galleries: () => require.context('/content/galleries', true, /.json$/).keys().map((key) => extract('galleries', key)),
}