import { createContext } from 'react';
import type { pagesTypes } from '../types/pagesTypes';
import pagesBase from '../lib/pagesBase'

export const Pages = createContext<pagesTypes[] | null>(pagesBase);

