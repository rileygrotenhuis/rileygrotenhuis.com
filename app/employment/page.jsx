"use client";

import React, { useState } from 'react';
import { Grid, Typography, List, ListItem, Card, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import employmentData from '../../content/employment.json';

export default function Employment() {
	const [currentEmployment, setCurrentEmployment] = useState(0);

	return (
		<Grid container>
			<Grid item xs={12}>
				<Card
					style={{
						borderRadius: '35px',
						padding: '10px',
					}}
				>
					<Grid container>
						<Grid item xs={12} lg={4} margin="auto">
							<Image
								alt="CompanyImage"
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
							xs={12}
							lg={8}
							display="flex"
							flexDirection="column"
							sx={{
								textAlign: {
									xs: 'center',
									lg: 'left',
								}
							}}
						>
							<Typography variant="pageTitle">{employmentData.data[currentEmployment].company}</Typography>
							<Typography variant="pageSubtitle">
								{employmentData.data[currentEmployment].position} | 
								<em> {employmentData.data[currentEmployment].dates}</em>
							</Typography>
							<List>
								{employmentData.data[currentEmployment].content.map((content, i) => {
									return (
										<ListItem key={i}>
											<Typography variant="pageText">{content}</Typography>
										</ListItem>
									);
								})}
							</List>
						</Grid>
					</Grid>
				</Card>
			</Grid>
			<Grid 
				item 
				xs={12}
				display="flex"
				justifyContent="center"
				gap={6}
				marginTop={1}
			>
				<Button
					sx={{
						color: 'white',
					}}
					onClick={() => {
						setCurrentEmployment(currentEmployment - 1);
					}}
					disabled={Boolean(currentEmployment === 0)}
				>
					<ArrowBackIcon
						sx={{ 
							width: '50px', 
							height: '50px',
						}}	
					/>
				</Button>
				<Button
					sx={{
						color: 'white',
					}}
					onClick={() => {
						setCurrentEmployment(currentEmployment + 1);
					}}
					disabled={Boolean(currentEmployment === employmentData.data.length - 1)}
				>
					<ArrowForwardIcon
						sx={{ 
							width: '50px', 
							height: '50px',
						}}
					/>
				</Button>
			</Grid>
		</Grid>
	);
};
