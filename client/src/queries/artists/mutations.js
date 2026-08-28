import { mutationOptions } from '@tanstack/react-query'
import { queryClient } from '../../services/queryClient.js'
import { updateArtistData, replaceArtistAndSong } from '../../api/artists.api.js'
import { artistKeys } from './keys.js'
import { songKeys } from '../songs/keys.js'

export const updateArtistMutation = () =>
  mutationOptions({
        mutationFn: ({ uuid, body }) => updateArtistData(uuid, body),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: artistKeys.artistById(variables.uuid),
            })
        }
    })
    


export const replaceArtistAndSongMutation = () =>
  mutationOptions({
        mutationFn: ({ uuid, body }) => replaceArtistAndSong(uuid, body),
        onSuccess: async  (_, variables) => {
            await Promise.all([
                queryClient.invalidateQueries({ queryKey: artistKeys.artistById(variables.uuid)}),
                queryClient.invalidateQueries({ queryKey: songKeys.songByArtistId(variables.uuid)}),
            ]);
        }
    })