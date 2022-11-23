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
			spacing={6}
			justifyContent="center" 
			sx={{ 
				marginTop: '125px' 
			}}
		>
			<Grid item={9} sx={{ height: 'fit-content', margin: 'auto 0' }}>
				<Grid item xs={12}>
					<Typography variant="homePageTitle">Hello I'm Riley</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="homePageSubtitle">
						I'm a software engineer based in Springfield, Missouri.
					</Typography>
				</Grid>
				<Grid item xs={12} sx={{ display: 'flex', gap: '50px', marginTop: '25px' }}>
					<Grid item>
						<Link 
							href="https://github.com/rileygrotenhuis"
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
							href="https://twitter.com/ryleygrotenhuis"
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
			<Grid item={3}>
				<Image
					alt="ProfileImage"
					src={ProfileImage}
					placeholder="blur"
					style={{
						width: '350px',
						height: '350px',
						borderRadius: '100%',
						boxShadow: '0 0 5px 2px #282a2d'
					}}
				>
				</Image>
			</Grid>
		</Grid>
	);
};
