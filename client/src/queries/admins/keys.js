export const adminKeys = {
    all: ['admins'],
    list: () => [...adminKeys.all, 'list'],
    adminById: (adminId) =>  [...adminKeys.all, 'details', adminId],
}