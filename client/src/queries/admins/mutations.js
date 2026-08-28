import { mutationOptions } from '@tanstack/react-query'
import { queryClient } from '../../services/queryClient.js'
import { adminLogin, adminLogout, adminAudit } from '../../api/admin.api.js'



export const adminLoginMutation = () =>
  mutationOptions({
        mutationFn: ({ uuid, password }) => adminLogin(uuid, password),
    })
    


export const adminLogoutMutation = () =>
  mutationOptions({
        mutationFn: adminLogout,
        onSuccess: queryClient.clear()
    })


export const adminAuditMutation = () =>
  mutationOptions({
    mutationFn: ({ uuid, name, action }) => adminAudit(uuid, name, action),
  })