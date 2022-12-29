
<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref(null)

const todos_asc = computed(() => todos.value.sort((a,b) =>{
	return a.createdAt - b.createdAt
}))

watch(name, (newVal) => {
	localStorage.setItem('name', newVal)
})

watch(todos, (newVal) => {
	localStorage.setItem('todos', JSON.stringify(newVal))
}, {
	deep: true
})

const addTodo = () => {
	if (input_content.value.trim() === '' || input_category.value === null) {
		return
	}

	todos.value.push({
		content: input_content.value,
		category: input_category.value,
		done: false,
		editable: false,
		createdAt: new Date().getTime()
	})
}

const removeTodo = (todo) => {
	todos.value = todos.value.filter((t) => t !== todo)
}

onMounted(() => {
	name.value = localStorage.getItem('name') || ''
	todos.value = JSON.parse(localStorage.getItem('todos')) || []
})
</script>

<template setup>
	<main id="travel-page">
		<h1>Travel</h1>		
		<section class="greeting">
			<h2 class="title">
				What's up, <input type="text" id="name" placeholder="Name here" v-model="name">
			</h2>
		</section>

		<section class="create-todo">
			<h3>Create your Destination</h3>

			<form id="new-todo-form" @submit.prevent="addTodo">
				<h4>What's on your Travel list?</h4>
				<input 
					type="text" 
					name="content" 
					id="content" 
					placeholder="e.g. explore now"
					v-model="input_content" />
				
				<h4>Pick a category</h4>
				<div class="options">

					<label>
						<input 
							type="radio" 
							name="category" 
							id="category1" 
							value="business Trip"
							v-model="input_category" />
						<span class="bubble business travel"></span>
						<div>Business Trip</div>
					</label>

					<label>
						<input 
							type="radio" 
							name="category" 
							id="category2" 
							value="personal Trip"
							v-model="input_category" />
						<span class="bubble personal travel"></span>
						<div>Personal Trip</div>
					</label>

				</div>

				<input type="submit" value="Add Destination" />
			</form>
		</section>

		<section class="todo-list">
			<h3>TRAVEL LIST</h3>
			<div class="list" id="todo-list">

				<div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`">
					<label>
						<input type="checkbox" v-model="todo.done" />
						<span :class="`bubble ${
							todo.category == 'business travel' 
								? 'business travel' 
								: 'personal travel'
						}`"></span>
					</label>

					<div class="todo-content">
						<input type="text" v-model="todo.content" />
					</div>

					<div class="actions">
						<button class="create" @click="Editodo(todo)">Edit</button>
					</div>
					<div class="actions">
						<button class="delete" @click="removeTodo(todo)">Delete</button>
					</div>

				</div>

			</div>
		</section>
	</main>
</template>
<style >
</style>

