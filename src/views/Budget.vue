<template>
    <div class="container">
        <v-row class="justify-center">
            <h1>This is a budget lol</h1>
        </v-row>
        <v-row>
            <router-link to="/budget/new">Make new budget</router-link>
        </v-row>
        <v-row class="justify-center">
            <v-text-field
            label="Total money"
            v-model="totalMoney"
            type="number"
            prefix="$"
            >
            </v-text-field>
        </v-row>
        <v-row>
            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                v-model="firstName"
                :counter="10"
                label="First name"
                required
            ></v-text-field>
            </v-col>
            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                v-model="lastName"
                :counter="10"
                label="Last name"
                required
            ></v-text-field>
            </v-col>
            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                v-model="email"
                label="E-mail"
                required
            ></v-text-field>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data (): {
        firstName: string,
        lastName: string,
        email: string,
        totalMoney: number
        } {
    return {
      firstName: "",
      lastName: "",
      email: "",
      totalMoney: 0
    };
  }
});
</script>
