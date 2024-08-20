import { ChangeEvent } from 'react';

export interface TabProps {
    sku: string;
    name: string;
    tabHandle: (event: ChangeEvent<HTMLInputElement>) => void; 
  }