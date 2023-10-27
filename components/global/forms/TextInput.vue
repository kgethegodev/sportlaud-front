<script  setup>
const props = defineProps(
  {
    type: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
      required: false,
    }
  }
)

defineEmits(['update:modelValue'])

</script>

<template>
<textarea v-if="props.type === 'textarea'" :placeholder="props.placeholder" :disabled="props.disabled" class = "sport-textarea" @change="$emit('update:modelValue', $event.target.value)"></textarea>

  <select v-else-if="props.type === 'select'" :disabled="props.disabled" class = "sport-input" @change="$emit('update:modelValue', $event.target.value)">
    <option value="" hidden>{{props.placeholder}}</option>
    <option v-for="option in props.options" :key="option.id" :value="option.id">{{option.name[0].toUpperCase() + option.name.slice(1)}}</option>
  </select>

  <div v-else-if="props.type === 'checkbox'" class="sport-checkbox-group">
    <div v-for="option in props.options" :key="option.id" class="sport-checkbox">
      <input type="checkbox" :disabled="props.disabled" :value="option.name" class = "sport-input" @change="$emit('update:modelValue', $event.target.value)" :id="option.id">
      <label :for="option.id">{{option.name}}</label>
    </div>
  </div>

  <div v-else-if="props.type === 'time'">
      <label>{{props.placeholder}}</label>
      <input  :disabled="props.disabled" :type="props.type" class = "sport-input" @input="$emit('update:modelValue', $event.target.value)">
  </div>


<input v-else :placeholder="props.placeholder" :disabled="props.disabled" :type="props.type" class = "sport-input" @input="$emit('update:modelValue', $event.target.value)">
</template>

<style scoped lang="scss">
.sport-textarea, .sport-input{
  display: block;
  width: 100%;
}
.sport-input{
  padding: 1rem;
  border: solid 0.1rem var(--color-grey-light);
  border-radius: 0.75rem;
  transition: 0.3s ease-in-out;

  &:focus{
    outline: none;
    border: solid 1px var(--color-royal-blue);
  }
}

.sport-checkbox-group{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;

  .sport-checkbox{
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
}
</style>
