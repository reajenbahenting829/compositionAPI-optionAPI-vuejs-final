<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar />
		<router-view />
		</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss">
:root {
	--primary: #de4ab2;
	--primary-alt: #22c55e;
	--dark-alt: #334155;
	--sidebar-width: 200px;
	--business:  var(--primary-alt);
	--personal: var(--danger);
	--light: #EEE;
	--grey: #888;
	--dark: #313154;
	--danger: #ff5b57;

	--shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

	--business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);
	--personal-glow: 0px 0px 4px rgba(234, 64, 164, 0.75);
}



* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}

input:not([type="radio"]):not([type="checkbox"]), button {
	appearance: none;
	border: none;
	outline: none;
	background: none;
	cursor: initial;
}

body {
	background: var(--light);
	color: var(--dark);
}

section {
	margin-top: 2rem;
	margin-bottom: 2rem;
	padding-left: 1.5rem;
	padding-right: 1.5em;
}

h3 {
	color: var(--dark);
	font-size: 1rem;
	font-weight: 400;
	margin-bottom: 0.5rem;
}
h1 {
	color: teal;
}
h4 {
	color: var(--grey);
	font-size: 0.875rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
}

.greeting .title {
	display: flex;
}

.greeting .title input {
	margin-left: 0.5rem;
	flex: 1 1 0%;
	min-width: 0;
}

.greeting .title,
.greeting .title input {
	color: var(--dark);
	font-size: 1.5rem;
	font-weight: 700;
}

.create-todo input[type="text"] {
	display: block;
	width: 100%;
	font-size: 1.125rem;
	padding: 1rem 1.5rem;
	color: var(--dark);
	background-color: #FFF;
	border-radius: 0.5rem;
	box-shadow: var(--shadow);
	margin-bottom: 1.5rem;
}

.create-todo .options {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
	margin-bottom: 1.5rem;
}

.create-todo .options label {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;
	background-color: #FFF;
	border-radius: 0.5rem;
	box-shadow: var(--shadow);
	cursor: pointer;
}

input[type="radio"],
input[type="checkbox"] {
	display: none;
}

.bubble {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 2px solid var(--business);
	box-shadow: var(--business-glow);
}

.bubble.personal {
	border-color: var(--personal);
	box-shadow: var(--personal-glow);
}

.bubble::after {
	content: "";
	display: block;
	opacity: 0;
	width: 0px;
	height: 0px;
	background-color: var(--business);
	box-shadow: var(--business-glow);
	border-radius: 50%;
	transition: 0.2s ease-in-out;
}

.bubble.personal::after {
	background-color: var(--personal);
	box-shadow: var(--personal-glow);
}

input:checked ~ .bubble::after {
	width: 10px;
	height: 10px;
	opacity: 1;
}

.create-todo .options label div {
	color: var(--dark);
	font-size: 1.125rem;
	margin-top: 1rem;
}

.create-todo input[type="submit"] {
	display: block;
	width: 100%;
	font-size: 1.125rem;
	padding: 1rem 1.5rem;
	color: #FFF;
	background-color: var(--primary);
	border-radius: 0.5rem;
	box-shadow: var(--personal-glow);
	cursor: pointer;
	transition: 0.2s ease-in-out;
}

.create-todo input[type="submit"]:hover {
	opacity: 0.75;
}

.todo-list h3{
color:yellowgreen;
font-size:250% ;
}
.todo-list .list {
	margin: 1rem 0;
	
} 

.todo-list .todo-item {
	display: flex;
	align-items: center;
	background-color: #FFF;
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: var(--shadow);
	margin-bottom: 1rem;
}

.todo-item label {
	display: block;
	margin-right: 1rem;
	cursor: pointer;
}

.todo-item .todo-content {
	flex: 1 1 0%;
}

.todo-item .todo-content input {
	color: var(--dark);
	font-size: 1.125rem;
}

.todo-item .actions {
	display: flex;
	align-items: center;
}

.todo-item .actions button {
	display: block;
	padding: 0.5rem;
	border-radius: 0.25rem;
	color: #FFF;
	cursor: pointer;
	transition: 0.2s ease-in-out;
}

.todo-item .actions button:hover {
	opacity: 0.75;
}

.todo-item .actions .edit {
	margin-right: 0.5rem;
	background-color: var(--primary);
}

.todo-item .actions .delete {
	background-color: var(--danger);
}

.todo-item.done .todo-content input {
	text-decoration: line-through;
	color: var(--grey);
}
.nav-container {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.079);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-btn {
    width: 300px;
    display: flex;
    justify-content: space-evenly;
  }

  .nav-container h3{

    text-decoration: none;
    color: white;
    font-size: 100px;
  }
  .nav-container a{
    text-decoration: none;
    font-size: 25px;
    color: white;
  }
  .nav-container img:hover{
    background-color: rgb(26, 24, 24);
  }

  .logo {
    height: 50px;
    width: 150px;
    margin-left: 3em;
  }
</style>