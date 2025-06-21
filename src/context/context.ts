import { createContext } from 'react';
import type { PagesContextType } from '../types/PagesContextType';

export const Pages = createContext<PagesContextType | null>(null);

