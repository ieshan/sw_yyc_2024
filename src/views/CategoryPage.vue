<template>
	<ion-page>
		<ion-header class="ion-no-boarder" collapse="fade" :translucent="true">
			<ion-toolbar>
				<ion-title>Tab 1</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-grid>
				<ion-row>
					<ion-col size="6">
						<ion-card color="primary" @click="router.push({name: 'search-cleaning'})">
							<ion-card-content>Image</ion-card-content>
							<ion-card-header>
								<ion-card-subtitle>Cleaning</ion-card-subtitle>
							</ion-card-header>
						</ion-card>
					</ion-col>
					<ion-col size="6">
						<ion-card color="primary" @click="router.push({name: 'search-cleaning'})">
							<ion-card-content>Image</ion-card-content>
							<ion-card-header>
								<ion-card-subtitle>Catering</ion-card-subtitle>
							</ion-card-header>
						</ion-card>
					</ion-col>
					<ion-col size="6">
						<ion-card color="primary" @click="router.push({name: 'search-cleaning'})">
							<ion-card-content>Image</ion-card-content>
							<ion-card-header>
								<ion-card-subtitle>Plumber</ion-card-subtitle>
							</ion-card-header>
						</ion-card>
					</ion-col>
					<ion-col size="6">
						<ion-card color="primary" @click="router.push({name: 'search-cleaning'})">
							<ion-card-content>Image</ion-card-content>
							<ion-card-header>
								<ion-card-subtitle>Electrician</ion-card-subtitle>
							</ion-card-header>
						</ion-card>
					</ion-col>
					<ion-col size="6">
						<ion-card color="primary" @click="router.push({name: 'search-cleaning'})">
							<ion-card-content>Image</ion-card-content>
							<ion-card-header>
								<ion-card-subtitle>Pest Control</ion-card-subtitle>
							</ion-card-header>
						</ion-card>
					</ion-col>
					<ion-col size="6">
						<ion-card color="primary" @click="router.push({name: 'search-cleaning'})">
							<ion-card-content>Image</ion-card-content>
							<ion-card-header>
								<ion-card-subtitle>Moving</ion-card-subtitle>
							</ion-card-header>
						</ion-card>
					</ion-col>
				</ion-row>
			</ion-grid>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonGrid,
	IonRow,
	IonCol,
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent
} from "@ionic/vue";
import router from "@/router";
</script>
