<template>
  <v-container
		fluid
		style="height: 500px"
	>
    <v-row
      justify="center"
      no-gutters
    >
      <v-col lg="1" class="mx-4">
				<v-select
						v-model="e1"
						:items="states"
						menu-props="auto"
						label="Model jachtu"
						hide-details
						append-icon="mdi-map"
						single-line
				></v-select>
      </v-col>
      <v-col lg="1" class="mx-4">
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
						></v-text-field>
					</template>
					<v-date-picker v-model="date" no-title scrollable>
						<v-spacer></v-spacer>
						<v-btn text color="primary" @click="menu = false">Cancel</v-btn>
						<v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
					</v-date-picker>
				</v-menu>
      </v-col>
      <v-col lg="1" class="mx-4">
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
						></v-text-field>
					</template>
					<v-date-picker v-model="date" no-title scrollable>
						<v-spacer></v-spacer>
						<v-btn text color="primary" @click="menu = false">Cancel</v-btn>
						<v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
					</v-date-picker>
				</v-menu>
      </v-col>
      <v-col lg="1" class="mx-4">
        <v-select
						v-model="e1"
						:items="states"
						menu-props="auto"
						label="Ilość osób"
						hide-details
						append-icon="mdi-account"
						single-line
					></v-select>
      </v-col>
      <v-col lg="1" class="mx-4">
        <v-btn icon color="primary" @click="submit">
					<v-icon size="50px">mdi-account</v-icon>
				</v-btn>
      </v-col>
    </v-row>
  </v-container>
	
		
<!--		<v-form>-->
<!--			<v-row-->
<!--				class="mb-6"-->
<!--				justify="center"-->
<!--			>-->
<!--				<v-select-->
<!--						v-model="e1"-->
<!--						:items="states"-->
<!--						menu-props="auto"-->
<!--						label="Model jachtu"-->
<!--						hide-details-->
<!--						prepend-icon="mdi-map"-->
<!--						single-line-->
<!--				></v-select>-->
<!--				-->
<!--				<v-menu-->
<!--					ref="menu"-->
<!--					v-model="menu"-->
<!--					:close-on-content-click="false"-->
<!--					:return-value.sync="date"-->
<!--					transition="scale-transition"-->
<!--				>-->
<!--					<template v-slot:activator="{ on }">-->
<!--						<v-text-field-->
<!--							v-model="date"-->
<!--							prepend-icon="mdi-calendar"-->
<!--							readonly-->
<!--							v-on="on"-->
<!--						></v-text-field>-->
<!--					</template>-->
<!--					<v-date-picker v-model="date" no-title scrollable>-->
<!--						<v-spacer></v-spacer>-->
<!--						<v-btn text color="primary" @click="menu = false">Cancel</v-btn>-->
<!--						<v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>-->
<!--					</v-date-picker>-->
<!--				</v-menu>-->
<!--				-->
<!--				<v-menu-->
<!--					ref="menu"-->
<!--					v-model="menu"-->
<!--					:close-on-content-click="false"-->
<!--					:return-value.sync="date"-->
<!--					transition="scale-transition"-->
<!--				>-->
<!--					<template v-slot:activator="{ on }">-->
<!--						<v-text-field-->
<!--							v-model="date"-->
<!--							prepend-icon="mdi-calendar"-->
<!--							readonly-->
<!--							v-on="on"-->
<!--						></v-text-field>-->
<!--					</template>-->
<!--					<v-date-picker v-model="date" no-title scrollable>-->
<!--						<v-spacer></v-spacer>-->
<!--						<v-btn text color="primary" @click="menu = false">Cancel</v-btn>-->
<!--						<v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>-->
<!--					</v-date-picker>-->
<!--				</v-menu>-->
<!--				-->
<!--				<v-select-->
<!--						v-model="e1"-->
<!--						:items="states"-->
<!--						menu-props="auto"-->
<!--						label="Ilość osób"-->
<!--						hide-details-->
<!--						prepend-icon="mdi-account"-->
<!--						single-line-->
<!--					></v-select>-->
<!--				<v-btn class="mr-4" @click="submit">submit</v-btn>-->
<!--			</v-row>-->
<!--		</v-form>-->
</template>

<script>
  export default {
		name: "Filters",
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }),
  }
</script>

<style scoped>

</style>
