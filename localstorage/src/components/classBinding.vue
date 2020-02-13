<template>
  <div>
    <div id="trainee-table">
      <div class="container">
        <div class="table-wrapper">
          <div class="table-title">
            <table border="5px" class="table table-striped table-hover">
              <thead>
                <th>Task</th>
                <th>Status</th>
              </thead>
              <tr v-for="task in tasks" :key="task.id">
                <td>{{task.Task}}</td>
                <td
                  :class="{'orange' : (task.Status=='In Progress'),'green' : (task.Status=='Done'),'blue' : (task.Status=='Todo')}"
                >{{task.Status}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
export default {
  data() {
    return {
      tasks: [
        { id: 1, Task: "Complete the Work", Status: "In Progress" },
        { id: 2, Task: "Clear Home", Status: "Done" },
        { id: 3, Task: "Water my plants", Status: "Todo" },
        { id: 4, Task: "Complete Home Work", Status: "Todo" }
      ]
    };
  }
};
</script>
<style scoped>
.container {
  margin: 0 auto;
  border: 0px solid black;
  padding: 10px 0px;
}
.table-wrapper {
  background: #fff;
  padding: 20px 25px;
  margin: 25px 0;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.table-title {
  padding-bottom: 15px;
  padding: 16px 30px;
  margin: -20px -25px 10px;
  border-radius: 3px 3px 0 0;
}
table.table tr td {
  border-color: #221f1f;
  padding: 12px 15px;
  vertical-align: middle;
}
table.table-striped tbody tr:nth-of-type(odd) {
  background-color: #fcfcfc;
}
.green {
  color: green;
}
.orange {
  color: orange;
}
.blue{
    color: blue;
}
</style>
