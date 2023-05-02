import React from 'react'
import UserPanelLayout from '../../app/components/UserPanelLayout'
import { NextPageWithLayout } from '../_app'

const Panel : NextPageWithLayout = () => {
  return (
    <div>
        <h1>User Dashboard</h1>
    </div>
  )
}

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Panel