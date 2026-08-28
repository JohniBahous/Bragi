export const songKeys = {
    all: ['songs'],
    list: () => [...songKeys.all, 'list'],
    songById: (songId) =>  [...songKeys.all, 'details', songId],
    audioById: (type, songId) => [...songKeys.all, 'audio', type, songId],
}