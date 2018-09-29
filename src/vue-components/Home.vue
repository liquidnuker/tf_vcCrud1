<template>
  <div class="row no-gutters">
    <div class="col-sm-12">
      <ul v-for="(i, index) in todos">
        <li>
          <label for="editnote" v-if="!i.edit">{{ i.todo }}</label>
          <div v-if="i.edit">
            <input id="editnote" type="text" name="" v-model="noteToEdit">
            <button @click="saveEdit(index)">Save</button>
            <button @click="cancelEdit(index)">Cancel</button>
          </div>
          <button @click="editNote(i.todo, index)" v-if="!i.edit">Edit</button>
          <button @click="deleteNote(index)" v-if="!i.edit">Delete</button>
        </li>
      </ul>
      <div v-if="addNote">
        <input type="text" name="" v-model="newNote" placeholder="enter note...">
        <button @click="saveNote()">Save</button>
        <button @click="addNewNote(false)">Cancel</button>
      </div>
      <button v-if="!addNote" @click="addNewNote(true)">Add Note</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todos: [{
        todo: "todo1",
        edit: false
      }],

      addNote: false,
      newNote: "",

      noteToEdit: ""
    };
  },
  mounted: function () {

  },
  methods: {
    addNewNote: function (add) {
      this.addNote = add;
    },
    saveNote: function () {
      this.todos.push({
        todo: this.newNote,
        edit: false
      });
      this.addNewNote(false);
      this.newNote = "";
    },
    editNote: function (todo, index) {
      this.noteToEdit = todo;
      this.todos[index].edit = true;
    },
    saveEdit: function (index) {
      this.todos[index].todo = this.noteToEdit;
      this.cancelEdit(index);
    },
    cancelEdit: function (index) {
      this.todos[index].edit = false;
      this.noteToEdit = "";
    },
    deleteNote: function (index) {
      this.todos.splice(index, 1);
    }
  }
};  
</script>