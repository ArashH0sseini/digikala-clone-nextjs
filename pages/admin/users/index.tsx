import React from 'react'
import Users from '../../../app/components/admin/Users'
import AdminPanelLayout from '../../../app/components/AdminPanelLayout'
import { NextPageWithLayout } from '../../_app'

const UserList : NextPageWithLayout = () => {
  return (
    <Users />
  )
}

UserList.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default UserList