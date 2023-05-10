import React from 'react'
import Dashboard from '../../app/components/admin/Dashboard'
import AdminPanelLayout from '../../app/components/AdminPanelLayout'
import UserPanelLayout from '../../app/components/UserPanelLayout'
import { NextPageWithLayout } from '../_app'

const AdminPanel : NextPageWithLayout = () => {
  return (
    <Dashboard />
  )
}

AdminPanel.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default AdminPanel