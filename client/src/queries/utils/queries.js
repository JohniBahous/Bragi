import { queryOptions } from '@tanstack/react-query'
import { getAllUUIDs } from '../../api/uuid.api.js'
import { utilsKeys } from './keys.js'


export const allUuidsQueryOptions = () => 
    queryOptions({
        queryKey: utilsKeys.list(),
        queryFn: getAllUUIDs
    })



