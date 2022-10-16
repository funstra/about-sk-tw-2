import { page } from "$app/stores";
import type { Page } from "@sveltejs/kit";
import { derived, readable, writable, type Readable } from "svelte/store";

export const navIndex = writable<number>()
export const destIndex = writable<number>()

const routes: App.route[] = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Work',
        path: '/work'
    },
    {
        name: 'Writing',
        path: '/writing'
    }
]
export const appRoutes = derived<Readable<Page>, App.route[]>(page, ($page, set) => {
    set(routes.map((route, i) => {
        if ($page.url.pathname === route.path) {
            navIndex.set(i)
            return {
                ...route,
                current: $page.url.pathname === route.path
            }
        }
        return route
    }
    ))
})