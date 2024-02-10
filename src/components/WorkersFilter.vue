<template>
   <div class="form">
      <h4>Filters</h4>
      <label>
         <div>Імя</div>
         <input v-model="filterObj.name" type="text" />
      </label>
      <label>
         <div>Вік від</div>
         <input v-model="filterObj.ageFrom" type="number" />
      </label>
      <label>
         <div>Вік до</div>
         <input v-model="filterObj.ageTo" type="number" />
      </label>
      <label>
         <div>Посада</div>
         <input v-model="filterObj.position" type="text" />
      </label>
      <label>
         <div>Досвід від</div>
         <input v-model="filterObj.experienceFrom" type="number" />
      </label>
      <label>
         <div>Досвід до</div>
         <input v-model="filterObj.experienceTo" type="number" />
      </label>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   name: 'WorkersFilter',
   data() {
      return {
         filterObj: {},
      }
   },
   watch: {
      filterObj: {
         handler(newFilterObj) {
            this.setFilterObj(newFilterObj)
         },
         deep: true,
      },
   },
   methods: {
      ...mapActions('workers', ['setFilterObj']),
   },
}
</script>

<style lang="scss" scoped>
.form {
   display: grid;
   gap: 20px;
   &__item {
   }
}
</style>
