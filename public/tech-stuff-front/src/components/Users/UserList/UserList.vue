<template>
  <v-row class="user-list">
    <v-col>
      <modal
        v-if="isModalOpen"
        :is-open="isModalOpen"
        :title="currentItem.modalTitle"
        attach
      >
        <template slot="default">
          <div class="d-flex justify-end">
            <v-btn
              color="error"
              small
              class="text-capitalize mr-1 confirm-delete"
              @click="handleDeleteUser"
            >
              Delete
            </v-btn>
            <v-btn
              small
              class="text-capitalize confirm-cancel"
              @click="handleCancel"
              >Cancel</v-btn
            >
          </div>
        </template>
      </modal>
      <v-btn color="secondary" class="text-capitalize mb-2" small
        >New User</v-btn
      >
      <v-row v-if="errorUsers">
        <v-col cols="6" offset="3">
          <v-alert dense text prominent icon="mdi-cloud-alert" type="error">
            We couldn't load the Users :(
          </v-alert>
        </v-col>
      </v-row>
      <v-row v-else-if="getUsers && getUsers.length === 0">
        <v-col cols="6" offset="3">
          <v-alert color="blue-grey" prominent dark dense class="alert-message">
            We sorry. There are not Users to show
          </v-alert>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">#</th>
                  <th class="text-left">Name</th>
                  <th class="text-left">Email</th>
                  <th class="text-left">Role</th>
                  <th class="text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in getUsers"
                  :key="item.id"
                  class="user"
                >
                  <td># {{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>
                    <span
                      class="pa-1 font-weight-bold overline white--text text-capitalize"
                      :class="item.styles"
                    >
                      {{ item.role }}
                    </span>
                  </td>
                  <td>
                    <v-btn
                      text
                      icon
                      color="warning"
                      title="Edit"
                      class="edit-user"
                    >
                      <v-icon small>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                      text
                      icon
                      color="error"
                      title="Delete"
                      class="delete-user"
                      @click="() => showModalDelete(item.id)"
                    >
                      <v-icon small>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Modal from '@/components/Shared/Modal';

export default {
  name: 'UserList',
  components: { Modal },
  data: () => ({
    isModalOpen: false,
    currentItem: null
  }),
  computed: {
    ...mapGetters(['users', 'errorUsers']),
    getUsers() {
      return this.users
        ? this.users.map(item => ({
            ...item,
            styles: this.roleStyles(item.role)
          }))
        : this.users;
    }
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions(['fetchUsers', 'deleteUser']),
    roleStyles(role) {
      switch (role) {
        case 'member':
          return 'primary';
        case 'admin':
          return 'dark';
        case 'superAdmin':
          return 'black';
        default:
          return;
      }
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    showModalDelete(id) {
      this.currentItem = {
        userId: id,
        modalTitle: 'Confirm Delete'
      };
      this.openModal();
    },
    async handleDeleteUser() {
      await this.deleteUser(this.currentItem.userId);
      this.closeModal();
    },
    handleCancel() {
      this.currentItem = null;
      this.closeModal();
    }
  }
};
</script>

<style lang="scss" scoped></style>