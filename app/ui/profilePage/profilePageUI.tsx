'use client'
import React from 'react';
import GrapheneContext from "@/app/ui/GrapheneContext";
import {Base, Composite, Pattern} from '@elsevier/graphene';

import styles from './profile.module.css';

const ProfilePageUI = () => {

    return (
        <GrapheneContext>
            <Base.Box className={styles.profilePageInner}>
                <Base.Inline horizontalAlignment="center">
                    <Base.Stack spacing="16dp">
                        <Base.Typography as="h1">This is Profile Page</Base.Typography>
                        <Base.Link iconLeft="home" size="large" href="/" label="Go to Home page" />
                        <Pattern.Tooltip
                            label="Tremendously enlightening text here"
                            size="medium"
                            side="left"
                        >
                            <Base.Button variant="primary" label="Hover me!" />
                        </Pattern.Tooltip>
                        <Base.Typography fontSize={16}>Value from .env file <b>{process.env.NEXT_PUBLIC_VALUE_1}</b></Base.Typography>
                        <Composite.Alert
                            variant="info"
                            size="medium"
                            title="Alert title"
                            description="Use them to guide a user’s attention to relevant details, but keep it related to the topic on the screen."
                        />
                    </Base.Stack>
                </Base.Inline>
            </Base.Box>
        </GrapheneContext>
    );
}

export default ProfilePageUI;
