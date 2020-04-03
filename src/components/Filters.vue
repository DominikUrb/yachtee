<template>
  <v-container
		fluid
		style="height: 700px"
		:style="{ backgroundImage: `url(${backgroundUrl})` }"
	>
		<v-row
			justify="center"
			align="center"
			style="height: 100%"
		>
			<v-col cols="2" class="mx-2">
					<v-select
							v-model="e1"
							:items="states"
							menu-props="auto"
							label="Model jachtu"
							hide-details
							append-icon="mdi-map"
							solo
					></v-select>
			</v-col>
			<v-col cols="2" class="mx-2">
				<v-menu
					ref="menu"
					v-model="menu"
					:close-on-content-click="false"
					:return-value.sync="date"
					transition="scale-transition"
				>
					<template v-slot:activator="{ on }">
						<v-text-field
							v-model="date"
							append-icon="mdi-calendar"
							readonly
							v-on="on"
							class="mt-3"
							solo
						></v-text-field>
					</template>
					<v-date-picker v-model="date" no-title scrollable>
						<v-spacer></v-spacer>
						<v-btn text color="primary" @click="menu = false">Cancel</v-btn>
						<v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
					</v-date-picker>
				</v-menu>
			</v-col>
			<v-col cols="2" class="mx-2">
				<v-menu
					ref="menu"
					v-model="menu"
					:close-on-content-click="false"
					:return-value.sync="date"
					transition="scale-transition"
				>
					<template v-slot:activator="{ on }">
						<v-text-field
							v-model="date"
							append-icon="mdi-calendar"
							readonly
							v-on="on"
							class="mt-3"
							solo
						></v-text-field>
					</template>
					<v-date-picker v-model="date" no-title scrollable>
						<v-spacer></v-spacer>
						<v-btn text color="primary" @click="menu = false">Cancel</v-btn>
						<v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
					</v-date-picker>
				</v-menu>
			</v-col>
			<v-col cols="2" class="mx-2">
				<v-select
						v-model="e1"
						:items="states"
						menu-props="auto"
						label="Ilość osób"
						hide-details
						append-icon="mdi-account"
						solo
					></v-select>
			</v-col>
			<v-col cols="1" class="mx-2">
				<v-btn icon color="primary" @click="submit">
					<v-icon size="50px">mdi-account</v-icon>
				</v-btn>
			</v-col>
		</v-row>
  </v-container>
</template>

<script>
	import backgroundUrl from '@/assets/main_page_background.png'
	
  export default {
		name: "Filters",
		data: () => ({
			date: new Date().toISOString().substr(0, 10),
			menu: false,
			modal: false,
			menu2: false,
			backgroundUrl,
    }),
  }
</script>

<style scoped>

</style>
