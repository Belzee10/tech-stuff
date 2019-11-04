<template>
  <v-row>
    <v-col cols="8">
      <v-row>
        <v-col cols="6">
          <v-text-field
            dense
            clearable
            label="Search"
            @input="value => $emit('search', value)"
            @click:clear="() => $emit('clear-search')"
          >
            <v-icon slot="prepend">mdi-magnify</v-icon>
          </v-text-field>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4">
      <v-row>
        <v-col cols="6">
          <v-select
            flat
            dense
            hide-details
            outlined
            :items="getSortOptions()"
            :value="sortValue"
            label="Sort"
            :menu-props="{ bottom: true, offsetY: true }"
            @change="value => $emit('sort-by-price', value)"
          >
            <template v-slot:item="{ item }">
              <v-icon small class="mr-1">mdi-{{ item.icon }}</v-icon>
              <span>{{ item.text }}</span>
            </template>
            <template v-slot:append>
              <v-icon small>mdi-{{ getIcon }}</v-icon>
            </template>
          </v-select>
        </v-col>
        <v-col cols="6">
          <v-btn-toggle
            color="primary"
            :value="viewValue"
            @change="value => $emit('change-view', value)"
          >
            <v-btn value="cards" class="cards" title="Grid view">
              <v-icon small>mdi-view-grid</v-icon>
            </v-btn>
            <v-btn value="items" class="items" title="Items view">
              <v-icon small>mdi-format-list-bulleted-square</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ItemsOptions',
  props: {
    viewValue: {
      type: String,
      default: ''
    },
    sortValue: {
      type: String,
      default: ''
    }
  },
  computed: {
    getIcon() {
      const item = this.getSortOptions().find(
        item => item.value === this.sortValue
      );
      return item ? item.icon : '';
    }
  },
  methods: {
    getSortOptions() {
      return [
        {
          text: 'Asc',
          value: 'ASC',
          icon: 'sort-ascending'
        },
        {
          text: 'Desc',
          value: 'DESC',
          icon: 'sort-descending'
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.v-select,
.v-item-group {
  border-radius: 2px !important;
}
.v-btn {
  height: 40px !important;
}
</style>
