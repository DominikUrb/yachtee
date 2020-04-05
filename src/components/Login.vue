<template>
	<v-container fluid>
		<v-row
			justify="center"
			align="center"
			style="height: 800px"
		>
			<v-col cols="4">
				<v-container v-if="login===true">
					<p class="primary--text text-center display-1">Witaj ponownie</p>
					<v-form
						ref="form"
						v-model="valid"
						lazy-validation
					>
						<v-text-field
							v-model="email"
							:rules="emailRules"
							label="E-mail"
							required
							outlined
							class="my-3"
							dense
						></v-text-field>
						<v-text-field
							v-model="password"
							label="Hasło"
							required
							outlined
							class="my-3"
							dense
						></v-text-field>
						<v-btn
							color="primary"
							@click="validate"
							style="width: 100%; height: 40px"
						>
							Zaloguj się
						</v-btn>
					</v-form>
					<router-link v-bind:to="remindPasswordUrl" class="text-center mt-3" tag="p">
						<b><a class="blue-grey--text ">Zapomniałeś hasła?</a></b>
					</router-link>
				</v-container>
				<v-container v-if="!login">
					<v-btn
						color="primary"
						@click="login = !login"
						style="width: 100%; height: 40px"
					>
						Zaloguj się
					</v-btn>
				</v-container>
				<v-container class="mt-12" v-if="login">
					<br><hr><br><br>
					<p class="primary--text text-center display-1">Jestem tu pierwszy raz</p>
					<v-btn
							color="primary"
							@click="login = false"
							style="width: 100%; height: 40px"
							class="my-3"
						>
							Zarejestruj się
						</v-btn>
				</v-container>
				<v-container class="mt-12" v-if="!login">
					<br><hr><br><br>
					<p class="primary--text text-center display-1">Podaj niezbędne dane</p>
					<v-form
						ref="form"
						v-model="valid"
						lazy-validation
					>
						<v-text-field
							v-model="email"
							:rules="emailRules"
							label="E-mail"
							required
							outlined
							class="my-3"
							dense
						></v-text-field>
						<v-text-field
							v-model="password"
							label="Hasło"
							required
							outlined
							class="my-3"
							dense
						></v-text-field>
						<v-text-field
							v-model="email"
							:rules="emailRules"
							label="E-mail"
							required
							outlined
							class="my-3"
							dense
						></v-text-field>
						<v-text-field
							v-model="password"
							label="Hasło"
							required
							outlined
							class="my-3"
							dense
						></v-text-field>
						<v-text-field
							v-model="email"
							:rules="emailRules"
							label="E-mail"
							required
							outlined
							class="my-3"
							dense
						></v-text-field>
						<v-text-field
							v-model="password"
							label="Hasło"
							required
							outlined
							class="my-3"
							dense
						></v-text-field>
						<v-btn
							color="primary"
							@click="validate"
							style="width: 100%; height: 40px"
						>
							Zarejestruj się
						</v-btn>
					</v-form>
				</v-container>
				
			</v-col>
		</v-row>
	</v-container>

	
</template>

<script>
	export default {
		name: "Login",
		data: () => ({
			login: true,
			valid: true,
			email: '',
			password: '',
			remindPasswordUrl: '/',
			emailRules: [
				v => !!v || 'Adres e-mail jest wymagany',
				v => /.+@.+\..+/.test(v) || 'Adres e-mail jest niepoprawny',
			],
			}),
			methods: {
				validate () {
					this.$refs.form.validate()
				},
			},
	}
</script>

<style scoped>

</style>
