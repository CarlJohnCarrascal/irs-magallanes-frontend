<template>
    <div class="m-md-4">
        <div class="card m-sm-1 mt-4 mb-4">
            <div class="card-header">

            </div>
            <div class="card-body">
                <div class="row">
                    <label class="form-label" for="">Add new item</label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Severity category name" aria-label="Severity category name" aria-describedby="button-addon2">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
                    </div>
                </div>
                <div class="row">
                    <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Severity Name</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1
                            </th>
                            <td class="s-critical">Critical</td>
                            <td class="d-flex justify-content-end">
                                <a class="btn btn-sm btn-danger d-inline ml-1">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2
                            </th>
                            <td class="s-high">Major</td>
                            <td class="d-flex justify-content-end">
                                <a class="btn btn-sm btn-danger d-inline ml-1">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3
                            </th>
                            <td class="s-medium">Minor</td>
                            <td class="d-flex justify-content-end">
                                <a class="btn btn-sm btn-danger d-inline ml-1">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3
                            </th>
                            <td class="s-low">Low</td>
                            <td class="d-flex justify-content-end">
                                <a class="btn btn-sm btn-danger d-inline ml-1">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>


</style>