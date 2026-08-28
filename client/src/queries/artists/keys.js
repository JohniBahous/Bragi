export const artistKeys = {
    all: ['artists'],
    list: () => [...artistKeys.all, 'list'],
    artistById: (artistId) =>  [...artistKeys.all, 'details', artistId],
    portraitById: (type, artistId) => [...artistKeys.all, 'portrait', type, artistId],
    songByArtistId: (artistId) => [...artistKeys.all, 'song', artistId,
    ]
}