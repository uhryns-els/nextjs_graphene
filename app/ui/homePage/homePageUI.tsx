'use client'
import React from 'react';
import Image from 'next/image';

import {Base, Composite, Pattern} from '@elsevier/graphene';
// Here is one of the options how to use Graphene components by destructuring. Other way how to use components you can find in the .profile.tsx file
const {Link, Inline, Stack, Typography, Box, Button} = Base;
const {Alert} = Composite;
const {Tooltip} = Pattern;

import GrapheneContext from "@/app/ui/GrapheneContext";

import favicon from "@/public/favicon.ico";

import styles from './home.module.css';

const HomePageUI = () => {

    return (
        <GrapheneContext>
            <Box className={styles.homePageInner}>
                <Inline horizontalAlignment="center">
                    <Stack spacing="8dp">
                        <Typography as="h1">This is Home Page</Typography>
                        <Link size="large" href="/profile" label="Go to Profile page" iconRight="user-profile" />
                        <Image src={favicon} alt="favicon" />
                        <Tooltip
                            label="Tremendously enlightening text here"
                            size="medium"
                            side="left"
                        >
                            <Button variant="primary" label="Hover me!" />
                        </Tooltip>
                        <Typography fontSize={16}>Value from .env file <b>{process.env.NEXT_PUBLIC_VALUE_1}</b></Typography>
                        <Alert
                            variant="info"
                            size="medium"
                            title="Alert title"
                            description="Use them to guide a user’s attention to relevant details, but keep it related to the topic on the screen."
                        />
                    </Stack>
                </Inline>
            </Box>
        </GrapheneContext>
    );
}

export default HomePageUI;
