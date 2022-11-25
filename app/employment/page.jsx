"use client";

import React, { useState } from 'react';
import { Grid, Typography, List, ListItem, Card } from "@mui/material";
import Image from 'next/image';
import employmentData from '../../content/employment.json';

export default function Employment() {
	const [currentEmployment, setCurrentEmployment] = useState(1);

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
						src={employmentData.data[currentEmployment].logo}
						width={300}
						height={300}
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
					<Typography variant="pageTitle">{employmentData.data[currentEmployment].company}</Typography>
					<Typography variant="pageSubtitle">
						{employmentData.data[currentEmployment].position} | 
						<em> {employmentData.data[currentEmployment].dates}</em>
					</Typography>
					<List>
						{employmentData.data[currentEmployment].content.map((content) => {
							return (
								<ListItem>
									<Typography variant="pageText">{content}</Typography>
								</ListItem>
							);
						})}
					</List>
				</Grid>
			</Grid>
		</Card>
	);
};
