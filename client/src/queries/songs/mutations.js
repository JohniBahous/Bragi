import { mutationOptions } from '@tanstack/react-query'
import { queryClient } from '../../services/queryClient.js'
import { incrementPlays, updateSongData } from '../../api/songs.api.js'
import { songKeys } from '../songs/keys.js'

export const incrementPlaysMutation = () =>
  mutationOptions({
        mutationFn:({ uuid, type }) => incrementPlays(uuid, type),
    })
    


export const updateSongDataMutation = () =>
  mutationOptions({
        mutationFn: ({ uuid, body }) => updateSongData(uuid, body),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: songKeys.songById(variables.uuid),
            })
        }
    })