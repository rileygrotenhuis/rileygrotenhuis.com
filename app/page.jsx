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
		<Grid 
			container
			width="fit-content"
			display="flex"
			margin="auto"
			gap="50px"
			justifyContent="center"
			sx={{
				marginTop: "10%",
				flexDirection: {
					md: 'row',
					xs: 'column-reverse',
				},
			}}

		>
			<Grid item 
				display="flex" 
				flexDirection="column"
				gap="18px"
				margin="auto 0"
				sx={{
					textAlign: {
						md: 'left',
						xs: 'center',
					},
				}}
			>
				<Typography variant="heroTitle">Hi, I'm Riley</Typography>
				<Typography variant="heroSubtitle">
					I'm a software engineer based out of Springfield, MO
				</Typography>
				<Grid 
					container 
					display="flex"
					gap="50px"
					sx={{
						width: 'fit-content',
						margin: {
							md: '0',
							xs: '0 auto',
						},
					}}
				>
					<Grid item>
						<Link
							href="https://www.github.com/rileygrotenhuis"
							target="__blank"
							style={{
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							<GitHubIcon />
						</Link>
					</Grid>
					<Grid item>
						<Link
							href="https://www.linkedin.com/in/rileygrotenhuis"
							target="__blank"
							style={{
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							<LinkedInIcon />
						</Link>
					</Grid>
					<Grid item>
						<Link
							href="https://www.twitter.com/ryleygrotenhuis"
							target="__blank"
							style={{
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							<TwitterIcon />
						</Link>
					</Grid>
					<Grid item>
						<Link
							href="https://www.instagram.com/rileygrotenhuis"
							target="__blank"
							style={{
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							<InstagramIcon />
						</Link>
					</Grid>
				</Grid>
			</Grid>
			<Grid item 
				sx={{
					margin: 'auto',
				}}
			>
				<Image 
					alt='ProfileImage' 
					src={ProfileImage} placeholder="blur"
					height={250}
					width={250}
					style={{
						borderRadius: '100%',
						boxShadow: '0 0 5px 2px #282a2d',
					}}
				/>
			</Grid>
		</Grid>
	);
};
