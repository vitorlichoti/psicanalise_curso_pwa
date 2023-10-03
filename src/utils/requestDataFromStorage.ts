export const requestDataFromStorage = (component: string) => {
    const storage: any = localStorage.getItem('data')

    if (component === 'TopBar') {
        return {
            avatar: JSON.parse(storage)?.avatar_urls,
            name: JSON.parse(storage)?.name
        }
    }
}