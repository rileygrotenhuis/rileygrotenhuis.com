"use client";

import React from 'react';
import { Grid, Typography } from "@mui/material";

export default function About() {
	return (
		<Grid 
			container
			display="flex"
			flexDirection="column"
			gap="25px"
		>
			<Grid item>
				<Typography variant="pageTitle">About Me</Typography>
			</Grid>
			<Grid item>
				<Typography variant="pageText">
					My name is Riley Grotenhuis and I am a software engineer for Midwestern Interactive, a company dedicated to providing embedded teams for strategic planning, design, development, and implementation of software, apps, branding, and content processes.
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant="pageText">
					I began my study of Computer Science at Missouri State University in the Fall semester of 2019 where I also began my career working for the university as a student web developer. I attended classes and worked for the university until I was offered a full-time role at Midwestern Interactive at the end of 2021 after building my portfolio with a multitude of personal projects.
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant="pageText">
					I am fluent in Javascript, PHP and SQL, working with technologies and frameworks such as: React, Next.js, Redux, Laravel, PostgreSQL, MySQL, Docker, and Git. I am dedicated to continue my growth and skills as an engineer and am enthusiastic about the constant change made to software development.
				</Typography>
			</Grid>
		</Grid>
	);
};
