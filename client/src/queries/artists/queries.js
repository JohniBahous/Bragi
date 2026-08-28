import { queryOptions } from '@tanstack/react-query'
import { getAllArtists, getArtistById, getPortraitURLById, getSongByArtistId } from '../../api/artists.api.js'
import { artistKeys } from './keys.js'


export const allArtistsQueryOptions = () => 
    queryOptions({
        queryKey: artistKeys.list(),
        queryFn: getAllArtists
    })


export const artistByIdQueryOptions = (id) => 
    queryOptions({
        queryKey: artistKeys.artistById(id),
        queryFn: () => getArtistById(id)
    })


export const getPortraitURLByIdQueryOptions = (type, id) => 
    queryOptions({
        queryKey: artistKeys.portraitById(type, id),
        queryFn: () => getPortraitURLById(type, id),
        staleTime:  1000 * 60 * 10, 
    })



export const getSongByArtistIdQueryOptions = (id) => 
    queryOptions({
        queryKey: artistKeys.songByArtistId(id),
        queryFn: () => getSongByArtistId(id)
    })

