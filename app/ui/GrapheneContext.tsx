'use client'
import React from 'react';
import { GrapheneRoot } from '@elsevier/graphene';

// Wrapper to the whole app. Also, here you can write functionality to change palette.
// For example from light mode to dark one.

const GrapheneContext = ({children, ...props}: {
    children: React.ReactNode;
}) => {
    return (
        <GrapheneRoot
            palette={'palette-light'}
            {...props}
        >
            {children}
        </GrapheneRoot>
    );
}

export default GrapheneContext;
