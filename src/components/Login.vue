<template>
	<v-row
		justify="center"
		align="center"
		class="mt-10"
	>
		<v-col cols="4">
			<v-container v-if="loginView===true">
				<p class="primary--text text-center display-1">Witaj ponownie</p>
				<v-form
					ref="form"
					v-model="validLoginForm"
					lazy-validation
				>
					<v-text-field
						v-model="userLoginData.username"
						:rules="emailRules"
						label="E-mail"
						required
						outlined
						class="my-3"
						dense
					></v-text-field>
					<v-text-field
						v-model="userLoginData.password"
						:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
						@click:append="show1 = !show1"
						:type="show1 ? 'text' : 'password'"
						label="Hasło"
						required
						outlined
						class="my-3"
						dense
					></v-text-field>
					<v-btn
						color="primary"
						style="width: 100%; height: 40px"
						:disabled="!validLoginForm"
						@click="login"
					>
						Zaloguj się
					</v-btn>
				</v-form>
				<p
					v-if="this.loginErrorMessage"
					class="mt-4"
				>
					<v-icon size="36px" color="red">mdi-alert-circle</v-icon> <span class="red--text">{{ this.loginErrorMessage }}</span>
				</p>
				<router-link v-bind:to="remindPasswordUrl" class="text-center mt-3" tag="p">
					<b><a class="blue-grey--text ">Zapomniałeś hasła?</a></b>
				</router-link>
			</v-container>
			<v-container v-if="!loginView">
				<v-btn
					color="primary"
					@click="loginView = !loginView"
					style="width: 100%; height: 40px"
				>
					Zaloguj się
				</v-btn>
			</v-container>
			<v-container class="mt-12" v-if="loginView">
				<br><hr><br><br>
				<p class="primary--text text-center display-1">Jestem tu pierwszy raz</p>
				<v-btn
						color="primary"
						@click="loginView = false"
						style="width: 100%; height: 40px"
						class="my-3"
					>
						Zarejestruj się
					</v-btn>
			</v-container>
			<v-container class="mt-12" v-if="!loginView">
				<br><hr><br><br>
				<p class="primary--text text-center display-1">Podaj niezbędne dane</p>
				<v-form
					ref="form"
					v-model="validRegistrationForm"
					lazy-validation
				>
					<v-text-field
						v-model="userRegistrationData.first_name"
						label="Imię"
						required
						outlined
						class="my-3"
						dense
					></v-text-field>
					<v-text-field
						v-model="userRegistrationData.last_name"
						label="Nazwisko"
						required
						outlined
						class="my-3"
						dense
					></v-text-field>
					<v-text-field
						v-model="userRegistrationData.email"
						:rules="emailRules"
						label="E-mail"
						required
						outlined
						class="my-3"
						dense
					></v-text-field>
					<v-text-field
						label="Hasło"
						v-model="userRegistrationData.password"
						:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
						:rules="[passwordRules.required, passwordRules.min]"
						:type="show1 ? 'text' : 'password'"
						hint="Hasło musi składać się z przynajmniej ośmiu znaków"
						counter
						@click:append="show1 = !show1"
						outlined
						dense
						class="my-3"
					></v-text-field>
					<v-btn
						:disabled="!validRegistrationForm"
						@click="register"
						color="primary"
						style="width: 100%; height: 40px"
					>
						Zarejestruj się
					</v-btn>
				</v-form>
				<p
					v-if="this.registrationErrorMessage"
					class="mt-4"
				>
					<v-icon size="36px" color="red">mdi-alert-circle</v-icon> <span class="red--text">{{ this.registrationErrorMessage }}</span>
				</p>
			</v-container>
			
		</v-col>
	</v-row>
</template>

<script>
	import axios from 'axios'
	
	export default {
		name: "Login",
		data: () => ({
			show1: false,
      show2: true,
      show3: false,
      show4: false,
			remindPasswordUrl: '/',
			loginView: true,
			validLoginForm: true,
			validRegistrationForm: true,
			loginErrorMessage: '',
			registrationErrorMessage: '',
			userLoginData: {
				username: '',
				password: '',
			},
			userRegistrationData: {
				first_name: '',
				last_name: '',
				email: '',
				password: '',
				username: '',
			},
			emailRules: [
				v => !!v || 'Adres e-mail jest wymagany',
				v => /.+@.+\..+/.test(v) || 'Adres e-mail jest niepoprawny',
			],
      passwordRules: {
        required: value => !!value || 'To pole jest wymagane.',
        min: v => v.length >= 8 || 'Hasło musi składać się z przynajmniej ośmiu znaków',
        },
			}),
			methods: {
				login () {
					if (this.$refs.form.validate()) {
						axios.post('http://localhost:8000/auth/', this.userLoginData).then(res => {
							this.$session.start();
							this.$session.set('token', res.data.token);
							this.$router.push('/')
							// eslint-disable-next-line no-unused-vars
						}).catch(e => {
							this.loginErrorMessage = 'Podany adres email lub hasło jest błędne.'
						})
					}
				},
				register () {
					if (this.$refs.form.validate()) {
						this.userRegistrationData.username = this.userRegistrationData.email;
						axios.post('http://localhost:8000/accounts/user/create/', this.userRegistrationData).then(res => {
							console.log(res)
							// eslint-disable-next-line no-unused-vars
						}).catch(e => {
							this.registrationErrorMessage = 'Użytkownik o podanym adresie email już istnieje.'
						})
					}
				},
			},
	}
</script>

<style scoped>

</style>
