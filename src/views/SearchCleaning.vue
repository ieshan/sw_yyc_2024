<template>
	<ion-page>
		<ion-header class="ion-no-boarder" collapse="fade" :translucent="true">
			<ion-toolbar>
				<ion-title>Cleaning</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-list>
				<ion-item>
					<ion-input label-placement="floating" value="hi@ionic.io">
						<div slot="label">Email <ion-text color="danger">(Required)</ion-text></div>
					</ion-input>
				</ion-item>
				<ion-item>
					<ion-input label-placement="floating" value="hi@ionic.io">
						<div slot="label">Email <ion-text color="danger">(Required)</ion-text></div>
					</ion-input>
				</ion-item>
				<ion-item>
					<ion-input label-placement="floating" value="hi@ionic.io">
						<div slot="label">Email <ion-text color="danger">(Required)</ion-text></div>
					</ion-input>
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonList,
	IonItem,
	IonInput,
	IonText,
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
} from '@ionic/vue';
</script>
