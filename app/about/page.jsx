"use client";

import React from 'react';
import { Grid, Typography } from "@mui/material";

export default function About() {
	return (
		<Grid container spacing={5} sx={{ marginTop: '25px' }}>
			<Grid item xs={12}>
				<Typography variant="aboutPageTitle">
					About Me
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="aboutPageText">
					Growing up I’ve always had the itch to work in a creative field that also allowed me to use the analytical part of my brain. I grew up playing any instrument I could pick up while failing at writing the next hit screenplay or book, but I also was constantly playing video games or learning all of the ins and outs of my family’s computer at home. When I randomly decided to take a computer science course in high school I found that programming was the perfect balance of these two passions of mine, and since then I was hooked.
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="aboutPageText">
					I continued to take the remaining computer science courses offered at my high school while simultaneously taking any sort of online courses I could about web development and programming in general. I went on to study Computer Science at Missouri State University where I also worked as a Web Works Student Programmer for the university’s Web Strategy & Development department. My education and work experience at Missouri State University allowed me to propel forward in my career in ways that I could’ve never imagined for where I was in my life.
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="aboutPageText">
					Today I am working full-time as a Software Engineer for Midwestern Interactive, a company dedicated to providing embedded teams for strategic planning, design, development, and implementation of software, apps, branding, and content processes.
				</Typography>
			</Grid>
		</Grid>
	);
};
