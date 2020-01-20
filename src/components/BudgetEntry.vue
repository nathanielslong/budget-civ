<template>
    <v-row>
        <v-col cols="6">
            <v-combobox
            :items="categories"
            @blur="addCategoryIfMissing"
            ></v-combobox>
        </v-col>
        <v-col cols="6">
            <v-text-field
            v-model.number="value"
            @keypress="isNumber($event)"
            prefix="$"
            label="Budget amount"
            required
            type="number"
            ></v-text-field>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState(["categories"])
  },
  data (): {
      value: number | null
      } {
    return {
      value: null
    };
  },
  methods: {
    ...mapMutations(["addCategory"]),
    // todo: figure out type for blur event
    addCategoryIfMissing (event: FocusEvent): void {
      const newCategory = (event.target as HTMLInputElement).value;
      if (newCategory &&
            newCategory.trim().length !== 0 &&
            (this.categories as string[]).indexOf(newCategory) === -1) {
        this.addCategory(newCategory.trim());
      }
    },
    isNumber (event: KeyboardEvent): boolean {
      const charCode = event.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        event.preventDefault();
        return false;
      } else {
        return true;
      }
    }
  },
  mounted (): void {
    if (this.categories.length === 0) {
      this.categories.push("Food");
    }
  }
});
</script>
