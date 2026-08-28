import { queryOptions } from '@tanstack/react-query'
import { getAllAdmins, getAdminById } from '../../api/admin.api.js'
import { adminKeys } from './keys.js'


export const allAdminsQueryOptions = () => 
    queryOptions({
        queryKey: adminKeys.list(),
        queryFn: getAllAdmins
    })



export const adminByIdQueryOptions = (id) => 
    queryOptions({
        queryKey: adminKeys.adminById(id),
        queryFn: () => getAdminById(id)
    })



