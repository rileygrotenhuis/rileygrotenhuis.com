"use client";

import React from 'react';
import { Grid, Typography, Box, List, ListItem, Card } from "@mui/material";
import Image from 'next/image';
import MissouriStateLogo from '../../public/MissouriStateLogo.png';

export default function Employment() {
	return (
		<Card
			style={{
				borderRadius: '35px',
				padding: '10px',
			}}
		>
			<Grid container>
				<Grid item xs={12} lg={4} margin="auto">
					<Image
						alt="MissouriStateLogo"
						src={MissouriStateLogo}
						placeholder="blur"
						width={300}
						style={{
							display: 'flex',
							margin: 'auto',
						}}
					/>
				</Grid>
				<Grid 
					item
					sx={12}
					lg={8}
					display="flex"
					flexDirection="column"
				>
					<Typography variant="pageTitle">Missouri State University</Typography>
					<Typography variant="pageSubtitle">
						Student Web Developer | 
						<em> January 2021 - November 2022</em>
					</Typography>
					<List>
						<ListItem>
							<Typography variant="pageText">
								The Web Strategy and Development department at Missouri State University leads the design, development, and maintenance process for web applications used by thousands of faculty, staff, and students at the university.
							</Typography>
						</ListItem>
						<ListItem>
							<Typography variant="pageText">
								I lead the project to create a migration platform for transferring web component assets from one content management system to another.
							</Typography>
						</ListItem>
						<ListItem>
							<Typography variant="pageText">
								I assisted in adding new features and enhancements to the Student Employment Administrative tool, which was used to process, view, and review clearance forms to allow them to work at the university.
							</Typography>
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</Card>
	);
};
