<template>
    <div class="container">
        <v-row class="justify-center">
            <h1>Create a new budget</h1>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field
                v-model.number="total"
                label="Total budget (Maximum amount of spend)"
                @keypress="isNumber($event)"
                prefix="$"
                required
                type="number"
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field
                v-model.number="computedTotal"
                label="Computed budget"
                prefix="$"
                readonly
                ></v-text-field>
            </v-col>
        </v-row>
        <template v-for="entry in budgetEntries">
            <BudEnt :key="entry" />
        </template>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { BudgetEntry } from "../models/budgetEntry";
import BudEnt from "../components/BudgetEntry.vue";

export default Vue.extend({
  components: {
    BudEnt
  },
  data (): {
        valid: boolean,
        total: number | null,
        computedTotal: number,
        budgetEntries: BudgetEntry[]
        } {
    return {
      valid: false,
      total: null,
      computedTotal: 0,
      budgetEntries: [new BudgetEntry("Food", 0)]
    };
  },
  methods: {
    isNumber (event: KeyboardEvent): boolean {
      const charCode = event.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        event.preventDefault();
        return false;
      } else {
        return true;
      }
    }
  }
});
</script>
