<template>
   <div>
      <div class="humans__list">
         <div class="humans__header">
            <div>Імя</div>
            <div>Вік</div>
            <div>Досвід</div>
            <div>Посада</div>
         </div>
         <div v-for="human in humansList" class="humans__item" :key="human.id">
            <div>{{ human.name }}</div>
            <div>{{ human.age }}</div>
            <div>{{ human.experience }}</div>
            <div>{{ human.position }}</div>
            <button @click="this.$emit('delete', human.id)">Delete</button>
            <button @click="this.$emit('onClick', human.id)">{{ btnTitle }}</button>
            <!--<router-link :to="{ name: 'worker-edit', params: { id: worker.id } }">edit</router-link>-->
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'HumansList',
   props: {
      humansList: {
         type: Array,
         required: true,
      },
      btnTitle: {
         type: String,
         required: true,
      },
   },
   created() {
      console.log(this.humansList)
   },
}
</script>

<style lang="scss" scoped>
.humans {
   // .employee__list
   &__list {
   }
   // .employee__header
   &__header {
      display: grid;
      font-size: 20px;
      grid-template-columns: repeat(4, 150px);
      &:not(:last-child) {
         margin-bottom: 20px;
      }
   }
   &__item {
      display: grid;
      border: 1px solid #000;
      padding: 5px;
      &:not(:last-child) {
         margin-bottom: 7px;
      }
      grid-template-columns: repeat(6, 150px);
   }
}
</style>
