"use client";

import React from 'react';
import { Grid, Typography } from "@mui/material";

export default function Blog() {
	return (
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Typography variant="heroTitle">Blog</Typography>
			</Grid>
		</Grid>
	);
};
