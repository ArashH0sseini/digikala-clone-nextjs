import React from 'react'
import Products from '../../../app/components/admin/Products'
import AdminPanelLayout from '../../../app/components/AdminPanelLayout'
import { NextPageWithLayout } from '../../_app'

const ProdcutList : NextPageWithLayout = () => {
  return (
    <Products />
  )
}

ProdcutList.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default ProdcutList