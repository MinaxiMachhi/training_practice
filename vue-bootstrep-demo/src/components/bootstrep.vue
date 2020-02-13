<template>
  <div>
   
    <b-table
      striped
      hover
      :items="items"
      :fields="fields"
      caption-top
      v-slot:table-caption
    >Student record</b-table>
    <br />
    <br />
    <br />
    <br />

    <!-- <b-table stacked hover :items="items" :fields="fields"></b-table> -->
    <!-- <b-table striped hover :items="items1" :fields="fields1"></b-table> -->

    <b-button @click="toggleBusy">Toggle Busy State</b-button>
    <b-table :items="items1" :busy="isBusy" class="mt-3" outlined>
      <template v-slot:table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
    <br />
    <br />
    <br />
    <!-- pagination -->
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>

      <p class="mt-3">Current Page: {{ currentPage }}</p>

      <b-table id="my-table" :items="items1" :per-page="perPage" :current-page="currentPage" small></b-table>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      perPage: 1,
      currentPage: 1,
      isBusy: false,
      fields: ["id", "firstname", "lastname"],
      items: [
        {
          isActive: true,
          id: 1,
          firstname: "Minaxi",
          lastname: "Machhi",
          _rowVariant: "danger"
        },
        {
          isActive: true,
          id: 2,
          firstname: "Nency",
          lastname: "Gajjar",
          _cellVariants: { id: "info", firstname: "warning" }
        },
        {
          isActive: true,
          id: 3,
          firstname: "Sagar",
          lastname: "Mange",
          _cellVariants: { id: "secondary", lastname: "warning" }
        },
        {
          isActive: false,
          id: 4,
          firstname: "khushbu",
          lastname: "Kosti",
          _cellVariants: { id: "info", firstname: "danger", lastname: "info" }
        }
      ],

      fields1: [
        {
          key: "id",
          sortable: true
        },
        {
          key: "first_name",
          sortable: false
        },
        {
          key: "last_name",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
          variant: "danger"
        }
      ],

      items1: [
        {
          id: 1,
          first_name: "A",
          last_name: "W"
        },
        {
          id: 2,
          first_name: "B",
          last_name: "X"
        },
        {
          id: 3,
          first_name: "C",
          last_name: "Y"
        },
        {
          id: 4,
          first_name: "D",
          last_name: "Z"
        }
      ]
    };
  },
  methods: {
    toggleBusy() {
      this.isBusy = !this.isBusy;
    }
  },
  computed: {
    rows() {    
      return this.items.length;
    }
  }
};
</script>