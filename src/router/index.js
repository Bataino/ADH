import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'

import Category from '../views/Category.vue'
import Signup from '../views/Signup.vue'
import Message from '../views/Message.vue'

import Records from '../views/Records.vue'
import Reminder from '../views/Reminder.vue'
import Notification from '../views/Notification.vue'

// import Slides from '../views/Slides.vue'
import UserMessage from '../views/UserMessage.vue'
import SingleNumericalRecord from '../views/SingleNumericalRecord.vue'

import Prescription from '../views/Prescription.vue'
import Physician from '../views/Physician.vue'
import Withdrawal from '../views/Withdrawal.vue'

import SinglePrescription from '../views/SinglePrescription.vue'
import NewPrescription from '../views/NewPrescription.vue'
import NewReminder from '../views/NewReminder.vue'


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/messages',
    name: 'Message',
    component: Message
  },
  {
    path: '/records',
    name: 'Records',
    component: Records
  },
  {
    path: '/reminders',
    name: 'Reminder',
    component: Reminder
  },
  {
    path: '/notifications',
    name: 'Notification',
    component: Notification
  },
  // {
  //   path: '/slides',
  //   name: 'Slides',
  //   component: Slides
  // },
  {
    path: '/physicians',
    name: 'Physician',
    component: Physician
  },
  {
    path: '/prescriptions',
    name: 'Prescription',
    component: Prescription
  },
  {
    path: '/withdrawal',
    name: 'Withdrawal',
    component: Withdrawal
  },
  {
    path: '/message/id',
    name: 'UserMessage',
    component: UserMessage
  },
  {
    path: '/prescription/id',
    name: 'SinglePrescription',
    component: SinglePrescription
  },
  {
    path: '/prescription/new',
    name: 'NewPrescription',
    component: NewPrescription
  },
  {
    path: '/reminder/new',
    name: 'NewReminder',
    component: NewReminder
  },
  {
    path: '/record/id',
    name: 'SingleNumericalRecord',
    component: SingleNumericalRecord
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
