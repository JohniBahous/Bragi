import { queryOptions } from '@tanstack/react-query'
import { getAllSongs, getSongById, getAudioURLById } from '../../api/songs.api.js'
import { songKeys } from './keys.js'


export const allSongsQueryOptions = () => 
    queryOptions({
        queryKey: songKeys.list(),
        queryFn: getAllSongs
    })



export const songByIdQueryOptions = (id) => 
    queryOptions({
        queryKey: songKeys.songById(id),
        queryFn: () => getSongById(id)
    })



export const audioByIdQueryOptions = (type, id) => 
    queryOptions({
        queryKey: songKeys.audioById(type, id),
        queryFn: () => getAudioURLById(type, id),
        enabled: !!id,
        staleTime:  1000 * 60 * 9, 
    })

