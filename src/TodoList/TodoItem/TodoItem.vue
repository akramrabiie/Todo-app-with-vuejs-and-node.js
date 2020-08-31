<template>
  <span>
    <b-form-checkbox
      :id="'checkbox'+todo.id"
      :name="'checkbox'+todo.id"
    >
      {{ todo.title }}
      <b-button variant="flat" size="sm" @click="remove(todo)">×</b-button>
    </b-form-checkbox>
  </span>
</template>
<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object
    }
  },
  methods: {
    remove(todo) {
      this.$emit("remove", todo);
    }
  }
};
</script>
<style >
.custom-checkbox {
  cursor: pointer;
  display: inline-block!important;
}

input:checked + label {
text-decoration: line-through;

}
</style>
