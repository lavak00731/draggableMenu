import type { pagesTypes } from "./pagesTypes"
export interface ContextualModalType {
    contextIsOpen: boolean,
    contextualPosition: {
        x: number,
        y: number
    },
    pageToModify: pagesTypes | null,

}
