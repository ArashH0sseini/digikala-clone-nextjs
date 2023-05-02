import React from 'react'
import AdminPanelLayout from '../../app/components/AdminPanelLayout'
import UserPanelLayout from '../../app/components/UserPanelLayout'
import { NextPageWithLayout } from '../_app'

const AdminPanel : NextPageWithLayout = () => {
  return (
    <div>
        <h1>Admin Dashboard</h1>
    </div>
  )
}

AdminPanel.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default AdminPanel