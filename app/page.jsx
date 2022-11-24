"use client";

import React from 'react';
import { Grid, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import Image from 'next/image';
import ProfileImage from '../public/ProfileImage.jpeg';

export default function Home() {
	return (
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Typography variant="heroTitle">Riley</Typography>
			</Grid>
		</Grid>
	);
};
