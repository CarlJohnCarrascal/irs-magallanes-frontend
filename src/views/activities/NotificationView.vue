<template>
    <div>
        <div class="card">
            <div class="card-header">
                Alerts Center
            </div>
            <div class="card-body">
                <div class="row">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <div v-for="n in notifications" :key="n.id">
                                <tr class="d-flex justify-content-between">
                                    <div class="d-flex justify-content-center gap-2">
                                    <td>
                                        <div v-if="n.type == 'Report'" class="icon-circle bg-warning">
                                            <i class="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                        <div v-if="n.type == 'New User'" class="icon-circle bg-primary mr-2">
                                            <i class="fas fa-user-plus text-white"></i>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="small text-gray-500">{{ n.created_at }}</div>
                                        <span v-if="n.isseen">{{ n.message }}</span>
                                        <span v-if="!n.isseen" class="font-weight-bold ">{{ n.message }}</span>
                                    </td>
                                        
                                    </div>
                                    <td>
                                        <a @click="viewDetails(n)" class="btn btn-sm btn-primary">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <hr>
                                    </td>
                                </tr>
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import useNotification from '../../composables/notification';
const { getNotifications, notifications, nerrors, markSeen } = useNotification()

onMounted(async () => {
    await getNotifications(false)
})

</script>

<style scoped></style>