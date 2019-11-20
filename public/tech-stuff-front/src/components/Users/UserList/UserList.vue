<template>
  <v-row class="user-list">
    <v-col>
      <modal
        v-if="isModalOpen"
        :is-open="isModalOpen"
        :title="modalProps.title"
      >
        <template slot="default">
          <confirmation-delete
            v-if="modalProps.type === 'delete'"
            :message="modalProps.message"
            @confirm-delete="handleDelete"
            @confirm-cancel="closeModal"
          />
          <user-form
            v-if="modalProps.type === 'create'"
            @submit="handleCreate"
            @cancel="closeModal"
          />
          <user-form
            v-if="modalProps.type === 'edit'"
            :populate-with="modalProps.user"
            :show-password="false"
            @submit="handleEdit"
            @cancel="closeModal"
          />
        </template>
      </modal>

      <v-btn
        color="secondary"
        class="text-capitalize mb-2 new-user"
        small
        @click="showModalCreate"
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
                      @click="() => showModalEdit(item)"
                    >
                      <v-icon small>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                      text
                      icon
                      color="error"
                      title="Delete"
                      class="delete-user"
                      @click="() => showModalDelete(item)"
                    >
                      <v-icon small>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <pagination class="mt-4" :length="4" :value="1" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Modal from '@/components/Shared/Modal';
import UserForm from '@/components/Users/UserForm';
import ConfirmationDelete from '@/components/Shared/ConfirmationDelete';
import Pagination from '@/components/Shared/Pagination';

export default {
  name: 'UserList',
  components: { Modal, UserForm, ConfirmationDelete, Pagination },
  data: () => ({
    isModalOpen: false,
    modalProps: null
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
    ...mapActions(['fetchUsers', 'deleteUser', 'createUser', 'editUser']),
    roleStyles(role) {
      switch (role) {
        case 'member':
          return 'primary';
        case 'admin':
          return 'info';
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
      this.modalProps = null;
    },
    showModalDelete(item) {
      this.modalProps = {
        type: 'delete',
        user: item,
        title: 'Confirm Delete',
        message: `Are you sure you want to delete this user: ${item.name}?`
      };
      this.openModal();
    },
    showModalCreate() {
      this.modalProps = {
        type: 'create',
        title: 'Create User'
      };
      this.openModal();
    },
    showModalEdit(item) {
      const name = item.name.split(' ', 2);
      this.modalProps = {
        type: 'edit',
        title: `Edit User: ${item.name}`,
        user: { ...item, name: name[0], lastName: name[1] }
      };
      this.openModal();
    },
    async handleDelete() {
      await this.deleteUser(this.modalProps.user.id);
      this.closeModal();
    },
    async handleCreate(value) {
      await this.createUser(value);
      this.closeModal();
    },
    async handleEdit(value) {
      await this.editUser({ id: this.modalProps.user.id, data: value });
      this.closeModal();
    }
  }
};
</script>

<style lang="scss" scoped></style>
