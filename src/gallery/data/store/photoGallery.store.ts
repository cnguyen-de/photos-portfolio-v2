import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const usePhotoGalleryStore = defineStore('photoGallery', {
  state: () => ({
    _galleries: [],
  }),
  actions: {
    async fetchGalleries() {
      const query = `{
        photoGalleryCollection {
          items {
            sys {
              id
            },
            date,
            title,
            description,
            author {
              name
            },
            coverImage {
              url
            },
            location {
              lat
              lon
            }
          }
        }
      }`

      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${
        import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID
      }`
      const fetchOptions = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_CONTENTFUL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
        }),
      }

      try {
        const response = await fetch(fetchUrl, fetchOptions).then((response) => response.json())
        this._galleries = response.data.photoGalleryCollection.items
      } catch (error) {
        console.error(error)
        throw new Error('Could not receive the data from Contentful!')
      }
    },
  },
  getters: {
    galleries: (state) => state._galleries,
  },
})
